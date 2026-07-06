/**
 * Ciudad digital nocturna — portada original del panel de historia.
 * Generada proceduralmente (alturas y ventanas deterministas), ~1.5 KB.
 */
export function StoryArt() {
  const buildings = Array.from({ length: 16 }, (_, i) => {
    const height = 70 + ((i * 53) % 130);
    const width = 30 + ((i * 17) % 14);
    return { x: 6 + i * 40, y: 360 - height, width, height };
  });

  return (
    <svg
      viewBox="0 0 640 360"
      role="presentation"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
    >
      <defs>
        <linearGradient id="story-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#020a1c" />
          <stop offset="0.62" stopColor="#083061" />
          <stop offset="1" stopColor="#0b3f80" />
        </linearGradient>
        <linearGradient id="story-bld" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0a1d3a" />
          <stop offset="1" stopColor="#041124" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#story-bg)" />
      <ellipse cx="320" cy="352" rx="330" ry="70" fill="#1378f9" opacity="0.3" />
      <ellipse cx="320" cy="356" rx="200" ry="40" fill="#22d9ee" opacity="0.2" />
      <g>
        {buildings.map((b, i) => (
          <g key={b.x}>
            <rect
              x={b.x}
              y={b.y}
              width={b.width}
              height={b.height}
              fill="url(#story-bld)"
              stroke="#1e4d8f"
              strokeOpacity="0.5"
            />
            {Array.from({ length: Math.floor(b.height / 24) }, (_, row) =>
              Array.from({ length: 3 }, (_, col) =>
                (i * 7 + row * 5 + col * 3) % 4 === 0 ? (
                  <rect
                    key={`${row}-${col}`}
                    x={b.x + 5 + col * 9}
                    y={b.y + 8 + row * 22}
                    width="4"
                    height="6"
                    fill={(i + row + col) % 5 === 0 ? "#22d9ee" : "#4da3ff"}
                    opacity="0.85"
                  />
                ) : null,
              ),
            )}
          </g>
        ))}
      </g>
      <g stroke="#4da3ff" strokeOpacity="0.25">
        {Array.from({ length: 9 }, (_, i) => (
          <line key={i} x1={320 + (i - 4) * 90} y1="360" x2={320 + (i - 4) * 26} y2="300" />
        ))}
        <line x1="0" y1="330" x2="640" y2="330" strokeOpacity="0.35" />
        <line x1="0" y1="348" x2="640" y2="348" strokeOpacity="0.25" />
      </g>
    </svg>
  );
}
