import Reveal from "@/components/ui/Reveal";
import { hotel, location } from "@/lib/data";
import { IconLocation } from "@/components/Icons";

const directions = [
  {
    head: "From Calbayog Airport",
    body: `Approximately 15 minutes from ${location.airport} to ${location.city}, ${location.province}. Airport transfer available on request.`,
  },
  {
    head: "In Calbayog City",
    body: "Near St. Peter &amp; Paul Cathedral, Nijaga Park, and the Samar Archaeological Museum.",
  },
  {
    head: "On the highway",
    body: `Pan-Philippine (Maharlika) Highway, ${location.barangay}, in front of the ${location.conventionCenter}, ${location.city} 6710, ${location.province}.`,
  },
];

export default function Location() {
  return (
    <section id="contact" className="bg-espresso py-24 md:py-32">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="script text-3xl">Find us</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-2 font-serif text-4xl font-light leading-tight text-cream sm:text-5xl md:text-[3.4rem]">
                {location.city}, {location.province}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-7 flex items-start gap-3">
                <IconLocation className="mt-1 h-6 w-6 shrink-0 text-gold" />
                <p className="font-sans text-base font-light text-cream/85">
                  {hotel.address}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-col gap-2 font-sans text-sm font-light text-stone">
                {/* TODO: add real phone & email from West Prime Facebook */}
                <a
                  href={`tel:${hotel.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-gold"
                >
                  {hotel.phone}
                </a>
                <a
                  href={`mailto:${hotel.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {hotel.email}
                </a>
                <span className="mt-2 text-cream/70">
                  Check-in {hotel.checkIn} · Check-out {hotel.checkOut}
                </span>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {directions.map((d, i) => (
                <Reveal key={d.head} delay={0.1 + i * 0.06}>
                  <h3 className="caption text-gold">{d.head}</h3>
                  <p
                    className="mt-2 font-sans text-[0.8rem] font-light leading-relaxed text-stone"
                    dangerouslySetInnerHTML={{ __html: d.body }}
                  />
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-md border border-white/10">
              <iframe
                title={`West Prime Hotel — ${location.regionFull}`}
                src="https://www.openstreetmap.org/export/embed.html?bbox=124.57%2C12.05%2C124.62%2C12.08&layer=mapnik&marker=12.067%2C124.597"
                className="h-full w-full grayscale-[0.4] contrast-110 invert-[0.92] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/20" />
              <div className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-espresso/85 px-4 py-2 backdrop-blur">
                <span className="caption text-[0.55rem] text-gold">
                  West Prime · {location.barangay}, {location.city}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
