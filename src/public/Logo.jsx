export default function Logo() {
  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* আইকন */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 ease-out drop-shadow-md"
      >
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="shineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.2" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="100" height="100" rx="22" fill="url(#bgGrad)" />

        {/* Shine */}
        <rect width="100" height="50" rx="22" fill="url(#shineGrad)" />

        {/* S letter */}
        <text
          x="50"
          y="68"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="58"
          fontWeight="700"
          fill="white"
        >
          S
        </text>

        {/* Amber dot */}
        <circle cx="74" cy="26" r="10" fill="#fbbf24" />
        <circle cx="74" cy="26" r="5" fill="white" opacity="0.35" />
      </svg>

      {/* টেক্সট */}
      <div className="flex flex-col leading-none">
        <span className="text-[10px] font-semibold tracking-[0.2em] text-blue-500 uppercase">
          by SammTech
        </span>
        <span className="text-[22px] font-black tracking-tight text-gray-900 leading-tight">
          Samm<span className="text-blue-600">Shop</span>
        </span>
      </div>
    </div>
  );
}