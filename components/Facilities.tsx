import Reveal from "@/components/ui/Reveal";
import { facilities } from "@/lib/data";
import { facilityIcons } from "@/components/Icons";

export default function Facilities() {
  return (
    <section id="amenities" className="bg-espresso py-24 md:py-32">
      <div className="container-editorial">
        <header className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="script text-3xl">Everything you need</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-2 font-serif text-4xl font-light leading-tight text-cream sm:text-5xl md:text-[3.4rem]">
              Amenities
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-sans text-sm font-light leading-relaxed text-stone">
              Practical comforts for travellers and families — no fuss, no
              surprises. Smoke-free throughout; pets are not permitted.
            </p>
          </Reveal>
        </header>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 md:grid-cols-3">
          {facilities.map((f, i) => {
            const Icon = facilityIcons[f.icon];
            return (
              <Reveal
                key={f.name}
                delay={(i % 3) * 0.06}
                className="group flex flex-col items-center gap-3 bg-espresso px-5 py-10 text-center transition-colors duration-500 hover:bg-noir"
              >
                <Icon className="h-9 w-9 text-gold transition-transform duration-500 ease-lux group-hover:-translate-y-1" />
                <h3 className="mt-1 font-serif text-xl text-cream">{f.name}</h3>
                <p className="caption text-[0.55rem] text-stone">{f.detail}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
