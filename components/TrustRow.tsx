import Reveal from "@/components/ui/Reveal";
import {
  IconLocation,
  IconPlane,
  IconDining,
  IconHeart,
} from "@/components/Icons";
import { location } from "@/lib/data";

const points = [
  {
    Icon: IconLocation,
    title: "Heart of Calbayog City",
    text: `On the Maharlika Highway, ${location.barangay} — in front of the ${location.conventionCenter}`,
  },
  {
    Icon: IconPlane,
    title: "15 min from Calbayog Airport",
    text: `A short ride from ${location.airport} to ${location.city}`,
  },
  {
    Icon: IconDining,
    title: "Best restaurant in town",
    text: "West Prime Restaurant — locally loved in Calbayog City",
  },
  {
    Icon: IconHeart,
    title: "Warm, familiar service",
    text: "Staff who remember returning guests",
  },
];

export default function TrustRow() {
  return (
    <section className="border-y border-white/10 bg-espresso py-12 md:py-16">
      <div className="container-editorial grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {points.map(({ Icon, title, text }, i) => (
          <Reveal
            key={title}
            delay={i * 0.08}
            className="flex items-start gap-4"
          >
            <Icon className="mt-0.5 h-8 w-8 shrink-0 text-gold" />
            <div>
              <h3 className="font-serif text-xl leading-tight text-cream">
                {title}
              </h3>
              <p className="mt-1 font-sans text-[0.8rem] font-light text-stone">
                {text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
