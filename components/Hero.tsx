"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BookingBar from "@/components/BookingBar";
import { hotel, location } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80"
          alt={`West Prime Hotel — ${location.regionFull}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 overlay-cinema" />
      <div className="absolute inset-0 bg-espresso/20" />

      <div className="container-editorial relative flex min-h-[100svh] flex-col justify-end pb-10 pt-32">
        <div className="mx-auto w-full max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="caption text-gold"
          >
            {location.regionFull}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-serif text-[2.8rem] font-light leading-[0.92] tracking-tight text-cream sm:text-6xl md:text-[5.5rem]"
          >
            WEST PRIME HOTEL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.9 }}
            className="mx-auto mt-6 max-w-xl text-pretty font-sans text-sm font-light leading-relaxed tracking-wide text-cream/80 md:text-base"
          >
            {hotel.tagline}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 w-full max-w-3xl"
        >
          <BookingBar />
          <p className="mt-5 text-center">
            <a
              href="#dine"
              className="script text-2xl transition-colors hover:text-candle"
            >
              Dine with us
            </a>
          </p>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="caption text-[0.55rem] text-cream/60">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="block h-8 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </div>
    </section>
  );
}
