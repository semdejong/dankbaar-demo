export function VanStripe({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 16" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path d="M0 3.2h86c12 0 18-4.2 34-4.2s22 4.2 34 4.2h86" stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <path d="M0 10.4h86c12 0 18-4.2 34-4.2s22 4.2 34 4.2h86" stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function LMark({ light = false }: { light?: boolean }) {
  return <span className={`l-mark${light ? " is-light" : ""}`} aria-hidden="true" />;
}

export function YearTick() {
  return (
    <p className="year-tick">
      <span className="year-tick-line" aria-hidden="true" />
      <span>1941</span>
    </p>
  );
}

export function Hoek() {
  const arm = "pointer-events-none absolute h-7 w-7 border-brand";
  return (
    <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
      <span className={`${arm} left-2.5 top-2.5 border-l-[3px] border-t-[3px]`} />
      <span className={`${arm} right-2.5 top-2.5 border-r-[3px] border-t-[3px]`} />
      <span className={`${arm} bottom-2.5 left-2.5 border-b-[3px] border-l-[3px]`} />
      <span className={`${arm} bottom-2.5 right-2.5 border-b-[3px] border-r-[3px]`} />
    </div>
  );
}
