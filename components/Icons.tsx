import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconLocation = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconPlane = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M2 12h5l3-9 4 18 3-9h5" />
  </svg>
);

export const IconHeart = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 20s-7-4.6-9.2-9A4.7 4.7 0 0 1 12 6a4.7 4.7 0 0 1 9.2 5c-2.2 4.4-9.2 9-9.2 9Z" />
  </svg>
);

export const IconDining = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 2v9a2 2 0 0 0 2 2v9M6 2v6M9 2v6M18 2c-1.5 0-2.5 2-2.5 5V13h2.5v9" />
  </svg>
);

export const IconBed = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 8v9M21 17v-5a3 3 0 0 0-3-3H3M3 13h18" />
    <path d="M7 9V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2" />
  </svg>
);

export const IconAircon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 2v20M4.5 7.5 19.5 16.5M19.5 7.5 4.5 16.5" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const IconView = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const IconTv = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 19v2" />
  </svg>
);

export const IconWifi = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12.5a10 10 0 0 1 14 0M8 15.8a5.5 5.5 0 0 1 8 0" />
    <circle cx="12" cy="19" r="0.6" fill="currentColor" />
  </svg>
);

export const IconParking = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M9 17V7h3.5a3 3 0 0 1 0 6H9" />
  </svg>
);

export const IconAirport = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M17 8h2a2 2 0 0 1 0 4h-2l-2 7H4l2-7H2l2-4h4l2-4h3l1 4Z" />
  </svg>
);

export const IconBreakfast = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 8h13v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
    <path d="M17 9h2a2 2 0 0 1 0 4h-2M6 2v2M9 2v2M12 2v2" />
  </svg>
);

export const IconRoomService = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 11h18M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
    <path d="M7 11v6M17 11v6M12 11v6" />
    <circle cx="12" cy="19" r="1" />
  </svg>
);

export const IconFamily = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="7" r="2.5" />
    <circle cx="16" cy="9" r="2" />
    <path d="M3 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1M14 20v-1a3 3 0 0 1 3-3h1" />
  </svg>
);

export const IconNoSmoking = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
    <path d="m4 4 16 16" />
    <path d="M8 14h8M10 10h4" />
  </svg>
);

export const IconConcierge = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 18h16M5 18a7 7 0 0 1 14 0M12 8V5M9 5h6" />
  </svg>
);

export const IconStar = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" {...p}>
    <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2Z" />
  </svg>
);

export const IconArrow = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconClose = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconMenu = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 7h18M3 12h18M3 17h18" />
  </svg>
);

export const facilityIcons: Record<string, (p: IconProps) => ReactElement> = {
  wifi: IconWifi,
  parking: IconParking,
  airport: IconAirport,
  dining: IconDining,
  cafe: IconBreakfast,
  roomService: IconRoomService,
  family: IconFamily,
  smokeFree: IconNoSmoking,
  frontDesk: IconConcierge,
};
