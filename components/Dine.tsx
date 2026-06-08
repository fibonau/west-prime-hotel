import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Parallax from "@/components/ui/Parallax";
import ReservationForm from "@/components/ReservationForm";
import { dishes, location } from "@/lib/data";
import { peso } from "@/components/ui/Decor";

export default function Dine() {
  return (
    <section
      id="dine"
      className="relative overflow-hidden bg-noir py-24 text-cream md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(20,28,24,0.9),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(231,201,138,0.08),transparent_45%)]" />

      <div className="container-editorial relative">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="script text-3xl text-candle">Discover</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-1 font-serif text-5xl font-light leading-none tracking-tight text-cream sm:text-6xl md:text-[5rem]">
                West Prime Restaurant
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="caption mt-4 text-candle/70">
                Filipino &amp; comfort dishes · Bar · Cafe · {location.region}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-md text-pretty font-sans text-[0.95rem] font-light leading-relaxed text-cream/70">
              Ask anyone in {location.city} where to eat and West Prime Restaurant
              comes up again and again — the restaurant locals call the best in
              town. Hearty Filipino plates, a well-stocked bar, and room service
              when you would rather stay in. Honest food, generous portions, and
              the familiar warmth of a place that has been part of the community
              for years.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.05} className="mt-12">
          <Parallax
            distance={60}
            className="relative aspect-[21/9] w-full overflow-hidden rounded-md"
          >
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80"
              alt="Candlelit dining at West Prime Restaurant"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/20 to-transparent" />
          </Parallax>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <h3 className="font-serif text-3xl font-light text-cream">
                From our kitchen
              </h3>
              <div className="mt-4 hairline" />
            </Reveal>
            <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {dishes.map((d, i) => (
                <Reveal as="li" key={d.name} delay={i * 0.06}>
                  <figure className="group">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                      <Image
                        src={d.image}
                        alt={d.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-cover transition-transform duration-[1200ms] ease-lux group-hover:scale-110"
                      />
                    </div>
                    <figcaption className="mt-4">
                      <div className="flex items-baseline justify-between gap-3">
                        <h4 className="font-serif text-xl text-cream">
                          {d.name}
                        </h4>
                        <span className="font-serif text-lg text-candle">
                          {peso(d.price)}
                        </span>
                      </div>
                      <p className="mt-1 font-sans text-[0.78rem] font-light leading-snug text-stone">
                        {d.note}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.15} className="mt-10">
              <div className="rounded-md border border-candle/20 bg-noir/50 p-6">
                <p className="caption text-candle">Morning at the cafe</p>
                <p className="mt-2 font-sans text-sm font-light leading-relaxed text-cream/75">
                  Our cafe opens early for breakfast — silog plates, brewed
                  coffee, and baked goods to start your day before the road calls
                  again. Room service available for guests who prefer breakfast
                  in bed.
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h3 className="font-serif text-3xl font-light text-cream">
                Reserve a table
              </h3>
              <div className="mt-4 hairline" />
            </Reveal>
            <Reveal delay={0.08} className="mt-8">
              <ReservationForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
