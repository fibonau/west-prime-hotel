"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, location } from "@/lib/data";
import { IconMenu, IconClose } from "@/components/Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-lux ${
        scrolled
          ? "bg-espresso/95 backdrop-blur-md shadow-[0_1px_0_rgba(192,160,92,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex h-20 items-center justify-between md:h-24">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 text-cream md:hidden"
          aria-label="Open menu"
        >
          <IconMenu className="h-6 w-6" />
        </button>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.slice(0, 3).map((l) => (
            <NavItem key={l.href} href={l.href}>
              {l.label}
            </NavItem>
          ))}
        </nav>

        <a
          href="#top"
          className="absolute left-1/2 -translate-x-1/2 text-center leading-none"
        >
          <span className="block font-serif text-xl font-medium tracking-[0.14em] text-cream md:text-[1.55rem]">
            WEST PRIME
          </span>
          <span className="caption mt-1 block text-[0.5rem] text-gold">
            {location.region}
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.slice(3).map((l) => (
            <NavItem key={l.href} href={l.href}>
              {l.label}
            </NavItem>
          ))}
          <a href="#stay" className="btn-gold">
            Book Now
          </a>
        </div>

        <a
          href="#stay"
          className="rounded-full border border-gold/60 px-4 py-2 font-sans text-[0.6rem] uppercase tracking-[0.2em] text-gold md:hidden"
        >
          Book
        </a>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-espresso md:hidden"
          >
            <div className="container-editorial flex h-20 items-center justify-between">
              <span className="font-serif text-xl tracking-[0.14em] text-cream">
                WEST PRIME
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-cream"
              >
                <IconClose className="h-6 w-6" />
              </button>
            </div>
            <nav className="container-editorial mt-10 flex flex-col gap-2">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.5 }}
                  className="border-b border-white/10 py-5 font-serif text-4xl font-light text-cream"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#stay"
                onClick={() => setOpen(false)}
                className="btn-gold mt-8 self-start"
              >
                Book Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group relative font-sans text-[0.72rem] uppercase tracking-[0.2em] text-cream/85 transition-colors hover:text-gold"
    >
      {children}
      <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 ease-lux group-hover:w-full" />
    </a>
  );
}
