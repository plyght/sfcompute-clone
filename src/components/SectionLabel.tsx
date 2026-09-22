/** The notched category chip that heads every section ("Resell", "Pricing", ...). */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start [&>div]:lg:pl-[30px]">
      <div className="flex items-center overflow-clip border-l-4 border-dark-100 bg-card py-[5px] pr-3 pl-5 lg:border-l-2 lg:pl-8">
        <span className="t-ps whitespace-nowrap text-dark-600">{children}</span>
      </div>
    </div>
  );
}
