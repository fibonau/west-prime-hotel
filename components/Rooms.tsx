"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import RoomModal from "@/components/RoomModal";
import { rooms, type Room } from "@/lib/data";
import { peso } from "@/components/ui/Decor";
import {
  IconBed,
  IconAircon,
  IconView,
  IconTv,
  IconArrow,
} from "@/components/Icons";

export default function Rooms() {
  const [active, setActive] = useState<Room | null>(null);

  return (
    <section id="stay" className="bg-espresso py-24 md:py-32">
      <div className="container-editorial">
        <header className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="script text-3xl">Stay With Us</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-2 font-serif text-4xl font-light leading-tight text-cream sm:text-5xl md:text-[3.4rem]">
              Rooms &amp; Rates
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-sans text-sm font-light leading-relaxed text-stone">
              Eleven well-kept rooms with air-conditioning, cable TV, soundproof
              windows, and private bathrooms — from ₱2,200 per night.
            </p>
          </Reveal>
        </header>

        <div className="mt-16 flex flex-col gap-8 md:gap-10">
          {rooms.map((room, i) => (
            <Reveal key={room.id} delay={0.04 * i}>
              <RoomCard
                room={room}
                flip={i % 2 === 1}
                onView={() => setActive(room)}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <RoomModal room={active} onClose={() => setActive(null)} />
    </section>
  );
}

function RoomCard({
  room,
  flip,
  onView,
}: {
  room: Room;
  flip: boolean;
  onView: () => void;
}) {
  const amenities = [
    { Icon: IconBed, label: room.bed },
    { Icon: IconAircon, label: room.aircon },
    { Icon: IconView, label: room.view },
    { Icon: IconTv, label: room.tv },
  ];

  return (
    <article className="grid grid-cols-1 overflow-hidden rounded-md border border-white/10 bg-noir/40 lg:grid-cols-2">
      <div
        className={`relative aspect-[16/11] w-full overflow-hidden lg:aspect-auto lg:min-h-[420px] ${
          flip ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={room.hero}
          alt={`${room.name} at West Prime Hotel`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1200ms] ease-lux hover:scale-105"
        />
        <span className="absolute left-5 top-5 rounded-full bg-espresso/70 px-4 py-1.5 font-sans text-[0.6rem] uppercase tracking-[0.2em] text-gold backdrop-blur">
          {room.tagline}
        </span>
      </div>

      <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-serif text-3xl font-light text-cream md:text-4xl">
              {room.name}
            </h3>
            <div className="text-right">
              <span className="caption block text-[0.5rem] text-stone">
                From
              </span>
              <span className="font-serif text-2xl text-gold md:text-3xl">
                {peso(room.price)}
              </span>
              <span className="font-sans text-[0.7rem] text-stone"> /night</span>
            </div>
          </div>
          <div className="mt-5 hairline" />
        </div>

        <p className="font-sans text-sm font-light leading-relaxed text-stone">
          {room.description}
        </p>

        <ul className="grid grid-cols-2 gap-4">
          {amenities.map(({ Icon, label }) => (
            <li key={label} className="flex items-center gap-3">
              <Icon className="h-5 w-5 shrink-0 text-gold" />
              <span className="font-sans text-[0.8rem] font-light text-cream/85">
                {label}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-2 flex flex-wrap gap-3">
          <a href="#stay" className="btn-gold">
            Book Now <IconArrow className="h-4 w-4" />
          </a>
          <button onClick={onView} className="btn-ghost">
            View Room
          </button>
        </div>
      </div>
    </article>
  );
}
