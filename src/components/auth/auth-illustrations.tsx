import { motion } from "framer-motion";

const wash = "#dbe9fd";
const primary = "#4f7df5";
const dark = "#274690";
const ink = "#1e2a3b";

function FloatingWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      className="relative flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
}

/** Person on a box, laptop open, monitor mockup with a login form + lightbulb + gears. */
export function LoginIllustration() {
  return (
    <FloatingWrapper>
      <svg viewBox="0 0 300 300" className="h-64 w-64">
        <circle cx="150" cy="160" r="110" fill={wash} />

        {/* gears */}
        <g transform="translate(228 205)">
          <circle r="17" fill={primary} />
          <circle r="6" fill="white" />
          {[...Array(8)].map((_, i) => (
            <rect
              key={i}
              x="-2.5"
              y="-22"
              width="5"
              height="8"
              fill={primary}
              transform={`rotate(${i * 45})`}
            />
          ))}
        </g>
        <g transform="translate(200 232)">
          <circle r="10" fill={primary} />
          <circle r="3.5" fill="white" />
          {[...Array(8)].map((_, i) => (
            <rect
              key={i}
              x="-1.5"
              y="-13"
              width="3"
              height="5"
              fill={primary}
              transform={`rotate(${i * 45})`}
            />
          ))}
        </g>

        {/* monitor */}
        <rect x="118" y="70" width="150" height="108" rx="6" fill="white" stroke={primary} strokeWidth="3" />
        <rect x="118" y="70" width="150" height="16" rx="6" fill={primary} />
        <circle cx="127" cy="78" r="2" fill="white" />
        <circle cx="134" cy="78" r="2" fill="white" />
        <circle cx="141" cy="78" r="2" fill="white" />
        <circle cx="193" cy="112" r="12" fill={primary} />
        <path d="M181 132c0-8 6-13 12-13s12 5 12 13" fill={primary} />
        <rect x="153" y="140" width="80" height="10" rx="3" fill={wash} />
        <rect x="153" y="140" width="18" height="10" rx="3" fill={primary} />
        <rect x="153" y="156" width="80" height="10" rx="3" fill={wash} />
        <rect x="153" y="156" width="18" height="10" rx="3" fill={primary} />

        {/* lightbulb */}
        <g transform="translate(74 108)">
          <circle r="14" fill="none" stroke={ink} strokeWidth="2.5" />
          <path d="M-5 12 L5 12 M-4 17 L4 17" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="0"
              y1="-20"
              x2="0"
              y2="-26"
              stroke={ink}
              strokeWidth="2"
              strokeLinecap="round"
              transform={`rotate(${deg})`}
            />
          ))}
        </g>

        {/* dotted accent */}
        <g fill={primary}>
          {[...Array(3)].map((_, row) =>
            [...Array(4)].map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={222 + col * 8}
                cy={78 + row * 8}
                r="1.6"
              />
            )),
          )}
        </g>

        {/* box */}
        <rect x="88" y="220" width="46" height="40" rx="3" fill={primary} />

        {/* person */}
        <g>
          <path d="M96 224 C96 195 118 178 138 182 C160 186 168 208 162 224 L100 224 Z" fill={dark} />
          <circle cx="128" cy="168" r="16" fill="#2b2b33" />
          <path d="M112 165 C112 150 144 150 144 165 L144 170 C138 160 118 160 112 170 Z" fill="#161620" />
          <rect x="116" y="182" width="24" height="34" rx="10" fill={primary} />
          <rect x="108" y="210" width="66" height="16" rx="8" fill="#f4f7fb" />
          <rect x="112" y="214" width="30" height="4" rx="2" fill={wash} />
          <path d="M132 216 C150 210 168 214 178 224 L178 232 L132 232 Z" fill="#e4ecf9" />
        </g>
      </svg>
    </FloatingWrapper>
  );
}

/** Person with laptop, envelope screen labelled "Contact Admin", paper airplane, gear. */
export function ContactAdminIllustration() {
  return (
    <FloatingWrapper>
      <svg viewBox="0 0 300 300" className="h-64 w-64">
        <circle cx="150" cy="160" r="110" fill={wash} />

        {/* paper airplane + dotted trail */}
        <g transform="translate(232 96) rotate(18)">
          <path d="M0 0 L28 8 L4 14 L-2 24 Z" fill={primary} />
          <path d="M0 0 L4 14 L10 9 Z" fill={dark} />
        </g>
        <path
          d="M198 92 C210 88 220 90 226 96"
          fill="none"
          stroke={primary}
          strokeWidth="2"
          strokeDasharray="3 5"
          strokeLinecap="round"
        />

        {/* gear */}
        <g transform="translate(214 220)">
          <circle r="17" fill={primary} />
          <circle r="6" fill="white" />
          {[...Array(8)].map((_, i) => (
            <rect
              key={i}
              x="-2.5"
              y="-22"
              width="5"
              height="8"
              fill={primary}
              transform={`rotate(${i * 45})`}
            />
          ))}
        </g>

        {/* screen card */}
        <rect x="112" y="82" width="132" height="96" rx="8" fill="white" stroke={primary} strokeWidth="3" />
        <rect x="112" y="82" width="132" height="14" rx="8" fill={primary} />
        <circle cx="120" cy="89" r="1.8" fill="white" />
        <circle cx="126" cy="89" r="1.8" fill="white" />
        <circle cx="132" cy="89" r="1.8" fill="white" />

        <rect x="150" y="110" width="56" height="40" rx="6" fill={primary} opacity="0.15" />
        <path
          d="M156 118 L206 118 L206 144 L156 144 Z M156 118 L181 133 L206 118"
          fill="none"
          stroke={primary}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <text
          x="178"
          y="168"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={ink}
        >
          Contact Admin
        </text>

        {/* dotted accent */}
        <g fill={primary}>
          {[...Array(3)].map((_, row) =>
            [...Array(3)].map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={64 + col * 8}
                cy={100 + row * 8}
                r="1.6"
              />
            )),
          )}
        </g>

        {/* box */}
        <rect x="84" y="220" width="46" height="40" rx="3" fill={primary} />

        {/* person */}
        <g>
          <path d="M92 224 C92 195 114 178 134 182 C156 186 164 208 158 224 L96 224 Z" fill={dark} />
          <circle cx="124" cy="168" r="16" fill="#2b2b33" />
          <path d="M108 165 C108 150 140 150 140 165 L140 170 C134 160 114 160 108 170 Z" fill="#161620" />
          <rect x="112" y="182" width="24" height="34" rx="10" fill={primary} />
          <rect x="104" y="210" width="66" height="16" rx="8" fill="#f4f7fb" />
          <rect x="108" y="214" width="30" height="4" rx="2" fill={wash} />
          <path d="M128 216 C146 210 164 214 174 224 L174 232 L128 232 Z" fill="#e4ecf9" />
        </g>
      </svg>
    </FloatingWrapper>
  );
}
