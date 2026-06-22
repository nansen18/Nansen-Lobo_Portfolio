import { useMemo } from "react";

interface Props {
  variant?: "hero" | "subtle";
  particles?: number;
}

const AnimatedBackground = ({ variant = "subtle", particles = 18 }: Props) => {
  const dots = useMemo(
    () =>
      Array.from({ length: particles }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 15,
        duration: Math.random() * 20 + 18,
      })),
    [particles]
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Hero gradient wash */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Gradient blobs */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, hsl(258 90% 60% / 0.35), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full blur-3xl animate-blob-slow"
        style={{ background: "radial-gradient(circle, hsl(222 90% 60% / 0.3), transparent 70%)" }}
      />
      {variant === "hero" && (
        <div
          className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full blur-3xl animate-blob"
          style={{ background: "radial-gradient(circle, hsl(280 90% 60% / 0.25), transparent 70%)" }}
        />
      )}

      {/* Floating particles */}
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full bg-white/40 animate-particle"
          style={{
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            bottom: "-10px",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
