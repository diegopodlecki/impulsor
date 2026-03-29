import { Link } from "react-router-dom";

interface NicheCardProps {
  name: string;
  rubro: string;
  accentColor: string;
  bgColor: string;
  href: string;
}

export function NicheCard({ name, rubro, accentColor, bgColor, href }: NicheCardProps) {
  return (
    <Link
      to={href}
      className="group relative flex flex-col overflow-hidden rounded-[14px] border transition-all duration-[0.18s]"
      style={{
        backgroundColor: "#0d0d12",
        borderColor: `${accentColor}40`, // 0.25 opacity
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${accentColor}99`; // 0.6 opacity
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 0 30px ${accentColor}30, 0 0 60px ${accentColor}15`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${accentColor}40`;
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Glow effect overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${accentColor}20 0%, transparent 70%)`,
        }}
      />
      {/* Preview Zone */}
      <div
        className="relative h-[110px] overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        {/* Neon line at top */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            backgroundColor: accentColor,
            boxShadow: `0 0 8px ${accentColor}`,
          }}
        />

        {/* Mini-wireframe */}
        <div className="flex h-full flex-col justify-center gap-[6px] px-4 py-3">
          {/* Logo bar */}
          <div
            className="h-[7px] w-[40px] rounded-[3px]"
            style={{ backgroundColor: `${accentColor}40` }}
          />
          {/* H1 bar */}
          <div
            className="h-[9px] w-[80%] rounded-[3px]"
            style={{ backgroundColor: `${accentColor}30` }}
          />
          {/* Subtitle bar */}
          <div
            className="h-[6px] w-[60%] rounded-[3px]"
            style={{ backgroundColor: `${accentColor}20` }}
          />
          {/* CTA button */}
          <div
            className="mt-1 h-[14px] w-[70px] rounded-[3px]"
            style={{ backgroundColor: `${accentColor}50` }}
          />
        </div>
      </div>

      {/* Footer Zone */}
      <div className="flex flex-col gap-1 p-[10px_14px_12px]">
        <h3 className="text-[13px] font-medium text-[#f0f0f0]">{name}</h3>
        <p className="text-[11px] text-white/38">{rubro}</p>
        
        {/* Ver demo badge */}
        <div className="mt-1 flex items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium"
            style={{
              backgroundColor: `${accentColor}26`, // 15% opacity
              color: accentColor,
            }}
          >
            {/* Pulsing dot */}
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: accentColor,
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            Ver demo
          </span>
        </div>
      </div>

      {/* Pulse animation keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
    </Link>
  );
}
