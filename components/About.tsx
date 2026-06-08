import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Parallax from "@/components/ui/Parallax";
import { CurvedLine } from "@/components/ui/Decor";
import { hotel, location } from "@/lib/data";

export default function About() {
  return (
    <section className="bg-cream py-24 text-espresso md:py-32">
      <div className="container-editorial grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="script text-3xl">Welcome to West Prime</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-serif text-4xl font-light leading-[1.05] text-espresso sm:text-5xl md:text-[3.4rem]">
              Comfort &amp; contemporary elegance in Calbayog City
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <CurvedLine className="mt-6 h-7 w-44 text-gold" />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-pretty font-sans text-[0.95rem] font-light leading-relaxed text-espresso/75">
              West Prime Hotel &amp; Restaurant has been a familiar address in{" "}
              {location.barangay}, {location.city}, {location.province} — on
              the Pan-Philippine (Maharlika) Highway, in front of the{" "}
              {location.conventionCenter}. Our{" "}
              {hotel.roomCount} well-kept rooms offer the essentials done
              right: air-conditioning, cable TV, soundproof windows, and private
              bathrooms with walk-in showers.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-xl text-pretty font-sans text-[0.95rem] font-light leading-relaxed text-espresso/75">
              Downstairs, West Prime Restaurant serves hearty Filipino and
              comfort dishes alongside a bar and cafe for breakfast. It is the
              kind of hotel where the front desk knows your name by the second
              visit — premium in look, welcoming in feel.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            {/* TODO: confirm Booking.com rating before presenting to owner */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-espresso/10 bg-white/50 px-5 py-3">
                <span className="font-serif text-2xl leading-none text-gold">
                  {hotel.bookingRating}
                </span>
                <span className="font-sans text-[0.7rem] uppercase tracking-[0.15em] text-espresso/60">
                  Rated by guests on Booking.com
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <Parallax
              distance={50}
              className="absolute right-0 top-0 h-[82%] w-[72%] overflow-hidden rounded-[3px] shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&w=1000&q=80"
                alt="Comfortable hotel room at West Prime"
                fill
                sizes="(max-width: 1024px) 70vw, 30vw"
                className="object-cover"
              />
            </Parallax>
            <Parallax
              distance={-40}
              className="absolute bottom-0 left-0 h-[58%] w-[56%] overflow-hidden rounded-[3px] border-4 border-cream shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"
                alt="West Prime Restaurant dining area"
                fill
                sizes="(max-width: 1024px) 55vw, 25vw"
                className="object-cover"
              />
            </Parallax>
            <div className="absolute -left-4 top-1/2 hidden -translate-y-1/2 -rotate-90 lg:block">
              <span className="caption text-espresso/40">{location.region}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
