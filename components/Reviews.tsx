import Reveal from "@/components/ui/Reveal";
import { reviews } from "@/lib/data";
import { StarRow } from "@/components/ui/Decor";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-24 text-espresso md:py-32">
      <div className="container-editorial">
        <header className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="script text-3xl">Kind words</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-2 font-serif text-4xl font-light leading-tight text-espresso sm:text-5xl md:text-[3.4rem]">
              Guest Reviews
            </h2>
          </Reveal>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal as="figure" key={r.name} delay={i * 0.1}>
              <blockquote className="flex h-full flex-col rounded-md border border-espresso/10 bg-white/50 p-8">
                <StarRow className="mb-5" />
                <p className="flex-1 font-serif text-xl font-light italic leading-relaxed text-espresso/85">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <figcaption className="mt-7 border-t border-espresso/10 pt-5">
                  <span className="block font-sans text-sm font-medium tracking-wide text-espresso">
                    {r.name}
                  </span>
                  <span className="caption mt-1 block text-espresso/50">
                    {r.origin}
                  </span>
                </figcaption>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
