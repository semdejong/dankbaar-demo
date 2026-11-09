export function VanStripe({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 18" fill="none" aria-hidden="true">
      <path
        d="M1 5h78c10 0 16-3 31-3s21 3 31 3h78"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M1 12.5h78c10 0 16-3 31-3s21 3 31 3h78"
        stroke="currentColor"
        strokeWidth="1.7"
      />
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
