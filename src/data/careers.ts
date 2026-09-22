/**
 * Careers section data, recovered from the source bundle
 * (chunk 0zzd-593532l1.js, modules 972177 `CareersCarousel` / 430637 `CareersRoles`).
 *
 * The roles list is served from Ashby upstream; this is the snapshot the dump
 * was taken against. Swap in a live fetch to keep it current.
 */

export type Photo = { src: string; alt: string; width: number; height: number };

/** Card height is fixed at 280px, so each card's width follows its aspect ratio. */
export const PHOTOS: Photo[] = [
  { src: "/home/careers/whiteboard.jpg", alt: "Whiteboarding a problem", width: 800, height: 706 },
  { src: "/home/careers/golden-gate.jpg", alt: "The Golden Gate Bridge in the fog", width: 800, height: 800 },
  { src: "/home/careers/silicon-valley-map.jpg", alt: "A teammate with a Silicon Valley map", width: 800, height: 800 },
  { src: "/home/careers/team-group.jpg", alt: "The SF Compute team", width: 800, height: 800 },
  { src: "/home/careers/office-desks.jpg", alt: "Working in the San Francisco office", width: 777, height: 800 },
  { src: "/home/careers/cake-cutting.jpg", alt: "Cutting a raspberry cake in the office", width: 533, height: 800 },
  { src: "/home/careers/standing-desk.jpg", alt: "A teammate at a standing desk", width: 800, height: 533 },
  { src: "/home/careers/team-patches.jpg", alt: "Embroidered team patches", width: 533, height: 800 },
  { src: "/home/careers/marin-headlands.jpg", alt: "The Marin Headlands from the Golden Gate Bridge", width: 533, height: 800 },
  { src: "/home/careers/merch-shelf.jpg", alt: "Shelves of San Francisco Compute Company sweatshirts", width: 533, height: 800 },
  { src: "/home/careers/dolores-park.jpg", alt: "A picnic in Dolores Park", width: 533, height: 800 },
  { src: "/home/careers/chinatown.jpg", alt: "Dim sum sign in Chinatown", width: 533, height: 800 },
  { src: "/home/careers/birthday-cake.jpg", alt: "Celebrating a birthday in the office", width: 800, height: 533 },
];

export type Job = { id: string; title: string; department: string; jobUrl: string };

const ashby = (id: string) => `https://jobs.ashbyhq.com/sfcompute/${id}`;

export const JOBS: Job[] = [
  { id: "dbb055b5-d2a9-4017-b4eb-4cc7ecbc6a8c", title: "Compute Deployment Project Manager", department: "Engineering", jobUrl: ashby("dbb055b5-d2a9-4017-b4eb-4cc7ecbc6a8c") },
  { id: "e322ba7e-1022-4aef-9f65-d12342f91f38", title: "Director of GRC", department: "Engineering", jobUrl: ashby("e322ba7e-1022-4aef-9f65-d12342f91f38") },
  { id: "4b20fd99-8536-4a62-ad74-b7ba98f126be", title: "HPC/ GPU Cluster Architect", department: "Engineering", jobUrl: ashby("4b20fd99-8536-4a62-ad74-b7ba98f126be") },
  { id: "f322f47b-48f5-4bf5-ac51-0e52ef9f0d79", title: "Staff Design Engineer", department: "Engineering", jobUrl: ashby("f322f47b-48f5-4bf5-ac51-0e52ef9f0d79") },
  { id: "b3402ea1-6fb3-4e29-b778-03b7325bad89", title: "Supercomputing Partnerships Manager", department: "Engineering", jobUrl: ashby("b3402ea1-6fb3-4e29-b778-03b7325bad89") },
  { id: "4f361ed0-efa2-4b53-849b-51a051478d2c", title: "Go-To-Market Lead - AI Infrastructure", department: "GTM", jobUrl: ashby("4f361ed0-efa2-4b53-849b-51a051478d2c") },
  { id: "71dd8480-7558-45bc-8c59-f2ee69ca04c9", title: "General Counsel", department: "Legal", jobUrl: ashby("71dd8480-7558-45bc-8c59-f2ee69ca04c9") },
  { id: "812474dc-7ce0-4918-bce5-24a41326caa9", title: "Chief of Staff to the CEO", department: "Operations", jobUrl: ashby("812474dc-7ce0-4918-bce5-24a41326caa9") },
  { id: "c9590a36-1743-4c8e-ac62-c8fee6b010cf", title: "People Operations Manager", department: "People", jobUrl: ashby("c9590a36-1743-4c8e-ac62-c8fee6b010cf") },
];

export const ALL_ROLES_URL = "https://jobs.ashbyhq.com/sfcompute";
