export default function GradientBackground() {
  const lines = Array.from({ length: 14 }, (_, i) => i);

  return (
    <>
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, #ffe7c2 0%, #ffd1e3 35%, #e9d4ff 70%, #dcd0ff 100%)",
        }}
      />

      <svg
        className="absolute inset-0 -z-10 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {lines.map((i) => {
          const offset = (i / (lines.length - 1)) * 200 - 100;
          return (
            <line
              key={i}
              x1={offset}
              y1="0"
              x2={offset + 100}
              y2="100"
              stroke="#ffffff"
              strokeWidth="0.15"
              strokeOpacity="0.25"
            />
          );
        })}
      </svg>
    </>
  );
}
