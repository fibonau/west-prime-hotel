import { IconStar } from "@/components/Icons";

/** Thin curved-line motif used as an editorial divider/accent. */
export function CurvedLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 60"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M0 40 C 80 8, 160 8, 200 30 C 240 52, 320 52, 400 20"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
      />
      <circle cx="200" cy="30" r="2.4" fill="currentColor" />
    </svg>
  );
}

/** Row of five filled stars. */
export function StarRow({
  className = "",
  count = 5,
}: {
  className?: string;
  count?: number;
}) {
  return (
    <div
      className={`flex items-center gap-1 ${className}`}
      aria-label={`${count} star rating`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <IconStar key={i} className="text-gold" />
      ))}
    </div>
  );
}

export const peso = (n: number) =>
  "₱" + n.toLocaleString("en-PH", { maximumFractionDigits: 0 });
