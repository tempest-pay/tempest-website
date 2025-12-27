export function PageBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Large, continuous glows that span the whole page (not clipped per-section). */}
      <div className="absolute -top-56 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-indigo-400/25 blur-3xl" />
      <div className="absolute top-[18%] right-[-220px] h-[640px] w-[640px] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute top-[52%] left-[-260px] h-[720px] w-[720px] rounded-full bg-emerald-400/12 blur-3xl" />
      <div className="absolute top-[78%] right-[-260px] h-[760px] w-[760px] rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute bottom-[-320px] left-1/2 h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-sky-400/12 blur-3xl" />

      {/* Soft grain on top of the glows, across the whole page */}
      <div className="grain" />
    </div>
  );
}


