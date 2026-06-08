import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Parallax from "@/components/ui/Parallax";
import { CurvedLine } from "@/components/ui/Decor";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&w=1100&q=80",
    alt: "Well-appointed guest room with city views",
    cap: "01 — Your Room",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1100&q=80",
    alt: "Warm restaurant dining atmosphere",
    cap: "02 — The Restaurant",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1100&q=80",
    alt: "Morning cafe and breakfast service",
    cap: "03 — The Cafe",
  },
];

export default function EditorialGallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-cream py-24 text-espresso md:py-32"
    >
      <div className="container-editorial">
        <Reveal>
          <p className="caption text-center text-espresso/50">
            A stay at West Prime
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 text-center font-serif text-[2.6rem] font-light uppercase leading-none tracking-tight text-espresso sm:text-6xl md:text-[5.5rem]">
            <span className="block">Stay</span>
            <span className="-mt-2 block text-gold md:-mt-5">· Dine ·</span>
            <span className="-mt-2 block md:-mt-5">Unwind</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <CurvedLine className="mx-auto mt-6 h-8 w-56 text-gold" />
        </Reveal>
      </div>

      <div className="container-editorial mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {shots.map((s, i) => (
          <Reveal
            key={s.cap}
            delay={i * 0.1}
            className={i === 1 ? "md:-mt-10" : i === 2 ? "md:mt-8" : ""}
          >
            <figure className="group">
              <Parallax
                distance={36}
                className="relative aspect-[3/4] w-full overflow-hidden rounded-[3px] shadow-xl"
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1400ms] ease-lux group-hover:scale-110"
                />
              </Parallax>
              <figcaption className="caption mt-4 text-espresso/55">
                {s.cap}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-14 text-center">
        <a
          href="#dine"
          className="btn-ghost border-espresso/30 text-espresso hover:bg-espresso/5"
        >
          Learn More
        </a>
      </Reveal>
    </section>
  );
}
