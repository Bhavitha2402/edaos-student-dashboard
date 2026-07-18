import { GraduationCap } from "lucide-react";

import { schoolInfo } from "@/data/mock-school";

export function SchoolCrest() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="size-[88px]"
      role="img"
      aria-label={`${schoolInfo.crestTop} ${schoolInfo.crestBottom} crest`}
    >
      <defs>
        <path id="crest-top-arc" d="M 16 62 A 44 44 0 0 1 104 62" />
        <path id="crest-bottom-arc" d="M 20 78 A 40 40 0 0 0 100 78" />
      </defs>

      <circle
        cx="60"
        cy="60"
        r="56"
        fill="none"
        stroke="#3b6fe0"
        strokeWidth="2"
      />
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="none"
        stroke="#3b6fe0"
        strokeWidth="1"
      />

      {/* Laurel leaves */}
      {[...Array(5)].map((_, i) => (
        <ellipse
          key={`left-${i}`}
          cx={22 - i * 1.5}
          cy={70 + i * 5}
          rx="6"
          ry="3"
          fill="#4f7df5"
          transform={`rotate(${-20 - i * 8} ${22 - i * 1.5} ${70 + i * 5})`}
        />
      ))}
      {[...Array(5)].map((_, i) => (
        <ellipse
          key={`right-${i}`}
          cx={98 + i * 1.5}
          cy={70 + i * 5}
          rx="6"
          ry="3"
          fill="#4f7df5"
          transform={`rotate(${20 + i * 8} ${98 + i * 1.5} ${70 + i * 5})`}
        />
      ))}

      <text fill="#2a4fa0" fontSize="10.5" fontWeight="700" letterSpacing="2">
        <textPath href="#crest-top-arc" startOffset="50%" textAnchor="middle">
          {schoolInfo.crestTop}
        </textPath>
      </text>
      <text fill="#2a4fa0" fontSize="8.5" fontWeight="700" letterSpacing="1.5">
        <textPath
          href="#crest-bottom-arc"
          startOffset="50%"
          textAnchor="middle"
        >
          {schoolInfo.crestBottom}
        </textPath>
      </text>

      <rect
        x="42"
        y="46"
        width="36"
        height="32"
        rx="4"
        fill="#4f7df5"
        opacity="0.12"
      />
      <foreignObject x="44" y="48" width="32" height="32">
        <div className="flex size-full items-center justify-center text-[#2a4fa0]">
          <GraduationCap className="size-6" strokeWidth={2} />
        </div>
      </foreignObject>
    </svg>
  );
}
