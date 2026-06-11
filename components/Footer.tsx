import Newsletter from "@/components/Newsletter";
import { hotel, location } from "@/lib/data";

const columns = [
  {
    title: "Pages",
    links: [
      { label: "Stay", href: "#stay" },
      { label: "Dine", href: "#dine" },
      { label: "Amenities", href: "#amenities" },
      { label: "Gallery", href: "#gallery" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Rooms & Rates", href: "#stay" },
      { label: "Restaurant", href: "#dine" },
      { label: "Guest Reviews", href: "#reviews" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Utility",
    links: [
      { label: "Reservations", href: "#stay" },
      { label: "Table Booking", href: "#dine" },
      { label: "Getting Here", href: "#contact" },
      { label: "Privacy", href: "#contact" },
    ],
  },
];

const socials = ["Facebook", "Instagram"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-espresso pt-20">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <h2 className="font-serif text-2xl font-medium tracking-[0.14em] text-cream">
              WEST PRIME
            </h2>
            <p className="caption mt-1 text-gold">
              Hotel &amp; Restaurant · {location.region}
            </p>
            <p className="mt-6 max-w-sm font-sans text-sm font-light leading-relaxed text-stone">
              Updates from West Prime in {location.city}, {location.province} —
              seasonal menus, quiet offers, and reasons to return.
            </p>
            <div className="mt-5 max-w-sm">
              <Newsletter />
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title}>
              <h3 className="caption text-gold">{col.title}</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-sans text-sm font-light text-cream/75 transition-colors hover:text-gold"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 font-sans text-sm font-light text-stone">
            <span>{hotel.address}</span>
            <span>
              {/* TODO: add real phone & email from West Prime Facebook */}
              <a
                href={`tel:${hotel.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-gold"
              >
                {hotel.phone}
              </a>
              {"  ·  "}
              <a
                href={`mailto:${hotel.email}`}
                className="transition-colors hover:text-gold"
              >
                {hotel.email}
              </a>
            </span>
            <span className="text-[0.75rem]">
              Check-in {hotel.checkIn} · Check-out {hotel.checkOut}
            </span>
          </div>
          <div className="flex gap-6">
            {socials.map((s) => (
              <a
                key={s}
                href="#top"
                className="font-sans text-[0.7rem] uppercase tracking-[0.18em] text-cream/70 transition-colors hover:text-gold"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-7 text-center md:flex-row md:text-left">
          <p className="caption text-[0.55rem] text-stone">
            © {year} West Prime Hotel &amp; Restaurant. All rights reserved.
          </p>
          <p className="caption text-[0.55rem] text-stone">
            Built by: <span className="text-gold">Next Likha</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
