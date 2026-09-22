"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import s from "./CliFeature.module.css";
import {
  DEMO_SCRIPT,
  INSTALL_COMMAND,
  INSTALL_SCRIPT,
  SEED_SCRIPT,
  TIMING,
  charDelay,
} from "@/data/cli";

const escapeHtml = (line: string) =>
  line.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Comment lines render in --cmt, everything else in --cmd. */
const highlight = (line: string) =>
  `<span class="${/^\s*#/.test(line) ? s.cmt : s.cmd}">${escapeHtml(line)}</span>`;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function CliFeature() {
  const termRef = useRef<HTMLDivElement>(null);
  const mirrorRef = useRef<HTMLPreElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  /** Bumped to cancel an in-flight type-out. */
  const generation = useRef(0);
  const typing = useRef(false);
  const restTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const copiedTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const [copyLabel, setCopyLabel] = useState("Copy install command");

  /* ---- painting ---------------------------------------------------------- */

  const paint = useCallback(() => {
    const input = inputRef.current;
    const mirror = mirrorRef.current;
    const cursor = cursorRef.current;
    if (!input || !mirror || !cursor) return;

    const value = input.value;
    mirror.innerHTML = value.split("\n").map(highlight).join("\n");

    const caretIdx = input.selectionStart ?? value.length;
    const prefix = value.slice(0, caretIdx);
    const row = (prefix.match(/\n/g) ?? []).length;
    const col = caretIdx - (prefix.lastIndexOf("\n") + 1);
    cursor.style.setProperty("--caret-row", String(row));
    cursor.style.setProperty("--caret-col", String(col));

    const under = value[caretIdx];
    const text = under === undefined || under === "\n" ? "" : under;
    cursor.textContent = text;
    cursor.classList.toggle(s.trail, text === "");
  }, []);

  const setValue = useCallback(
    (value: string, caret: number) => {
      const input = inputRef.current;
      if (!input) return;
      input.value = value;
      input.setSelectionRange(caret, caret);
      paint();
    },
    [paint],
  );

  /* ---- cursor state ------------------------------------------------------ */

  const cursorActive = useCallback(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    cursor.classList.add(s.cursorActive);
    cursor.classList.remove(s.cursorRest);
    clearTimeout(restTimer.current);
  }, []);

  const scheduleRest = useCallback(() => {
    clearTimeout(restTimer.current);
    restTimer.current = setTimeout(() => {
      const cursor = cursorRef.current;
      if (!cursor) return;
      cursor.classList.remove(s.cursorActive);
      cursor.classList.add(s.cursorRest);
    }, TIMING.cursorRestMs);
  }, []);

  const bump = useCallback(() => {
    cursorActive();
    scheduleRest();
  }, [cursorActive, scheduleRest]);

  /* ---- the typing engine ------------------------------------------------- */

  const cancelTyping = useCallback(() => {
    generation.current++;
    typing.current = false;
    mirrorRef.current?.classList.remove(s.fading);
    cursorRef.current?.classList.remove(s.fading);
  }, []);

  const type = useCallback(
    async (target: string) => {
      const input = inputRef.current;
      const mirror = mirrorRef.current;
      const cursor = cursorRef.current;
      if (!input || !mirror || !cursor) return;

      const gen = ++generation.current;
      typing.current = true;
      cursorActive();

      const current = input.value;
      let shared = 0;
      while (
        shared < current.length &&
        shared < target.length &&
        current[shared] === target[shared]
      ) {
        shared++;
      }

      // Excess text fades out and is cut, rather than being backspaced.
      if (current.length > shared) {
        mirror.classList.add(s.fading);
        cursor.classList.add(s.fading);
        await sleep(TIMING.eraseFadeMs);
        if (gen !== generation.current) {
          mirror.classList.remove(s.fading);
          cursor.classList.remove(s.fading);
          return;
        }
        setValue(target.slice(0, shared), shared);
        mirror.classList.remove(s.fading);
        cursor.classList.remove(s.fading);
        cursorActive();
      }

      while (input.value.length < target.length) {
        if (gen !== generation.current) return;
        const ch = target[input.value.length];
        setValue(input.value + ch, input.value.length + 1);
        cursorActive();
        await sleep(charDelay(ch));
      }

      typing.current = false;
      scheduleRest();
    },
    [cursorActive, scheduleRest, setValue],
  );

  const restore = useCallback(() => {
    if (inputRef.current && inputRef.current.value !== DEMO_SCRIPT) void type(DEMO_SCRIPT);
  }, [type]);

  /* ---- lifecycle --------------------------------------------------------- */

  useEffect(() => {
    setValue(SEED_SCRIPT, SEED_SCRIPT.length);
    scheduleRest();

    const isMobile =
      typeof matchMedia !== "undefined" && matchMedia("(max-width: 999px)").matches;
    const reduced =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || reduced || typeof IntersectionObserver === "undefined") {
      setValue(DEMO_SCRIPT, DEMO_SCRIPT.length);
      return;
    }

    const el = termRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        if (inputRef.current?.value === SEED_SCRIPT) void type(DEMO_SCRIPT);
      },
      { threshold: TIMING.revealThreshold },
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Desktop-only interaction wiring.
  useEffect(() => {
    if (typeof matchMedia === "undefined") return;
    if (matchMedia("(max-width: 999px)").matches) return;

    const input = inputRef.current;
    const term = termRef.current;
    if (!input || !term) return;

    const onInput = () => {
      cancelTyping();
      paint();
      bump();
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(restore, TIMING.idleRestoreMs);
    };
    const onKeyDown = () => {
      if (typing.current) cancelTyping();
    };
    const onSelectionChange = () => {
      if (document.activeElement === input) {
        paint();
        bump();
      }
    };
    const onFocus = () => bump();
    const onBlur = () => {
      clearTimeout(idleTimer.current);
      restore();
      scheduleRest();
    };
    const onPointerDown = () => {
      if (typing.current) cancelTyping();
      input.focus();
    };

    input.addEventListener("input", onInput);
    input.addEventListener("keydown", onKeyDown);
    input.addEventListener("focus", onFocus);
    input.addEventListener("blur", onBlur);
    document.addEventListener("selectionchange", onSelectionChange);
    term.addEventListener("pointerdown", onPointerDown);
    return () => {
      input.removeEventListener("input", onInput);
      input.removeEventListener("keydown", onKeyDown);
      input.removeEventListener("focus", onFocus);
      input.removeEventListener("blur", onBlur);
      document.removeEventListener("selectionchange", onSelectionChange);
      term.removeEventListener("pointerdown", onPointerDown);
    };
  }, [bump, cancelTyping, paint, restore, scheduleRest]);

  // The terminal never scrolls; it's masked at the bottom instead.
  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    const onScroll = () => {
      input.scrollTop = 0;
      input.scrollLeft = 0;
    };
    input.addEventListener("scroll", onScroll);
    return () => input.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(
    () => () => {
      clearTimeout(restTimer.current);
      clearTimeout(idleTimer.current);
      clearTimeout(hoverTimer.current);
      clearTimeout(copiedTimer.current);
    },
    [],
  );

  /* ---- copy button ------------------------------------------------------- */

  const onCopyEnter = () => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      if (document.activeElement !== inputRef.current) void type(INSTALL_SCRIPT);
    }, TIMING.copyHoverMs);
  };
  const onCopyLeave = () => {
    clearTimeout(hoverTimer.current);
    if (document.activeElement !== inputRef.current) {
      cancelTyping();
      restore();
    }
  };
  const onCopyClick = () => {
    navigator.clipboard
      ?.writeText(INSTALL_COMMAND)
      .then(() => {
        setCopyLabel("Copied");
        clearTimeout(copiedTimer.current);
        copiedTimer.current = setTimeout(
          () => setCopyLabel("Copy install command"),
          TIMING.copiedLabelMs,
        );
      })
      .catch(() => {});
  };

  const BUTTON =
    "focus-ring group flex flex-1 items-center gap-2.5 rounded-md border border-line bg-card px-[18px] py-2.5 t-pl text-dark-600 transition-colors hover:bg-light-400";

  return (
    <>
      <div className="mt-10">
        <div className="focus-ring rounded-[14px]">
          <div className={s.terminal} ref={termRef}>
            <div className={s.titlebar}>
              <div className={s.lights}>
                <i className={s.r} />
                <i className={s.y} />
                <i className={s.g} />
              </div>
              <div className={s.tbtitle}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  aria-hidden="true"
                >
                  <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
                <span>training — -zsh — 80×24</span>
              </div>
            </div>
            <div className={s.body}>
              <pre className={s.mirror} ref={mirrorRef} aria-hidden="true" />
              <textarea
                ref={inputRef}
                className={s.input}
                spellCheck={false}
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
                wrap="off"
                aria-label="Interactive sf CLI example"
                defaultValue=""
              />
              <div className={`${s.cursor} ${s.cursorRest} ${s.trail}`} ref={cursorRef} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-3 lg:flex-row">
        <button
          type="button"
          className={BUTTON}
          onPointerEnter={onCopyEnter}
          onPointerLeave={onCopyLeave}
          onClick={onCopyClick}
        >
          <span className="flex-1 text-left" aria-live="polite">
            {copyLabel}
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15V5a2 2 0 0 1 2-2h10" />
          </svg>
        </button>
        <a
          href="https://docs.sfcompute.com"
          target="_blank"
          rel="noopener noreferrer"
          className={BUTTON}
        >
          <span className="flex-1">Read the docs</span>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8.85355 8.85355"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M0.353553 8.5L8.35355 0.500001M8.35355 8.49993L8.35355 0.500001L0.353622 0.5" />
          </svg>
        </a>
      </div>
    </>
  );
}
