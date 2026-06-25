import React from "react";

interface Petal {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

export const CherryBlossomParticles: React.FC<{ count?: number }> = ({ count = 14 }) => {
  const petals: Petal[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: 10 + Math.random() * 14,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
    opacity: 0.5 + Math.random() * 0.45,
  }));

  return (
    // Container only covers the TOP portion of the section (h-64 = 256px)
    // so petals only appear and fade within this top band
    <div
      className="pointer-events-none absolute top-0 left-0 right-0 h-64 overflow-hidden z-10"
      aria-hidden
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-0"
          style={{
            left: `${petal.x}%`,
            animation: `petalFallTop ${petal.duration}s -${Math.random() * petal.duration}s linear infinite`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            style={{ opacity: petal.opacity }}
          >
            <g>
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <ellipse
                  key={i}
                  cx={12 + 5 * Math.cos((angle * Math.PI) / 180)}
                  cy={12 + 5 * Math.sin((angle * Math.PI) / 180)}
                  rx="4.5"
                  ry="2.8"
                  fill={i % 2 === 0 ? "#FFB7C5" : "#FF8FAB"}
                  transform={`rotate(${angle}, ${12 + 5 * Math.cos((angle * Math.PI) / 180)}, ${12 + 5 * Math.sin((angle * Math.PI) / 180)})`}
                  style={{ opacity: 0.85 }}
                />
              ))}
              <circle cx="12" cy="12" r="2" fill="#FFD6DD" />
            </g>
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes petalFallTop {
          0%   { transform: translateY(-40px) translateX(0px) rotate(0deg); opacity: 0; }
          10%  { opacity: 1; }
          80%  { opacity: 0.4; }
          100% { transform: translateY(260px) translateX(60px) rotate(270deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
