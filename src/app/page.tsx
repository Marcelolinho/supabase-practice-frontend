import LoginCard from "../components/auth/LoginCard";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4">
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, #ffe7c2 0%, #ffd1e3 35%, #e9d4ff 70%, #dcd0ff 100%)",
        }}
      />

      <PerspectiveTunnel />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <span className="rounded-full bg-yellow-100 px-5 py-1.5 text-xs font-medium text-black">
          Fag Login
        </span>

        {/* <h1 className="text-3xl font-bold text-black sm:text-4xl">
          Welcome Otake!
        </h1> */}

        <LoginCard />
      </div>
    </main>
  );
}

function PerspectiveTunnel() {
  const lines = Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * Math.PI * 2;
    const x2 = 50 + Math.cos(angle) * 80;
    const y2 = 50 + Math.sin(angle) * 80;
    return { x2, y2, key: i };
  });

  return (
    <svg
      className="absolute inset-0 -z-10 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {lines.map(({ x2, y2, key }) => (
        <line
          key={key}
          x1="50"
          y1="50"
          x2={x2}
          y2={y2}
          stroke="#ffffff"
          strokeWidth="0.15"
          strokeOpacity="0.25"
        />
      ))}
    </svg>
  );
}
