export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#07070d]" />

      {/* Mesh gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_20%,rgba(139,92,246,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_80%,rgba(16,185,129,0.1),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_80%_90%,rgba(59,130,246,0.08),transparent_40%)]" />

      {/* Animated orbs */}
      <div className="bg-orb bg-orb-emerald absolute -left-24 top-[10%] h-[28rem] w-[28rem] rounded-full blur-3xl" />
      <div className="bg-orb bg-orb-violet absolute -right-24 top-[35%] h-[24rem] w-[24rem] rounded-full blur-3xl [animation-delay:2s]" />
      <div className="bg-orb bg-orb-emerald absolute bottom-[5%] left-[30%] h-[20rem] w-[20rem] rounded-full blur-3xl [animation-delay:4s]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(16,185,129,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Diagonal accent lines */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-violet-500/15 to-transparent" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,7,13,0.4)_100%)]" />

      {/* Noise texture */}
      <div className="noise-overlay absolute inset-0 opacity-[0.025]" />
    </div>
  );
}
