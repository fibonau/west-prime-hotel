"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Room } from "@/lib/data";
import { peso } from "@/components/ui/Decor";
import { IconClose, IconArrow } from "@/components/Icons";

export default function RoomModal({
  room,
  onClose,
}: {
  room: Room | null;
  onClose: () => void;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
  }, [room]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (room) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [room, onClose]);

  return (
    <AnimatePresence>
      {room && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/85 p-4 backdrop-blur-sm md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid max-h-[90vh] w-full max-w-5xl grid-cols-1 overflow-hidden rounded-md bg-espresso shadow-2xl md:grid-cols-[1.4fr_1fr]"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 rounded-full bg-espresso/70 p-2 text-cream backdrop-blur transition-colors hover:bg-gold hover:text-espresso"
            >
              <IconClose className="h-5 w-5" />
            </button>

            <div className="relative aspect-[4/3] w-full bg-espresso md:aspect-auto md:h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={room.gallery[active]}
                    alt={`${room.name} — view ${active + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                {room.gallery.map((g, i) => (
                  <button
                    key={g}
                    onClick={() => setActive(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? "w-7 bg-gold" : "w-2 bg-cream/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center overflow-y-auto p-7 md:p-10">
              <p className="script text-2xl">{room.tagline}</p>
              <h3 className="mt-1 font-serif text-3xl font-light text-cream md:text-4xl">
                {room.name}
              </h3>
              <div className="mt-4 hairline" />
              <p className="mt-5 font-sans text-sm font-light leading-relaxed text-stone">
                {room.description}
              </p>

              <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 font-sans text-[0.8rem]">
                <Spec label="Bed" value={room.bed} />
                <Spec label="Aircon" value={room.aircon} />
                <Spec label="View" value={room.view} />
                <Spec label="TV" value={room.tv} />
              </dl>

              <div className="mt-8 flex items-end justify-between gap-4">
                <div>
                  <span className="caption text-[0.55rem] text-stone">
                    From
                  </span>
                  <p className="font-serif text-3xl text-gold">
                    {peso(room.price)}
                    <span className="font-sans text-xs text-stone"> / night</span>
                  </p>
                </div>
                <a href="#stay" onClick={onClose} className="btn-gold">
                  Book Now <IconArrow className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="caption text-[0.52rem] text-stone">{label}</dt>
      <dd className="mt-1 font-sans text-sm text-cream">{value}</dd>
    </div>
  );
}
