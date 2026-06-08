"use client";

import { useState } from "react";
import { IconArrow } from "@/components/Icons";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      setError("Please enter a valid email.");
      return;
    }
    setDone(true);
  };

  if (done) {
    return (
      <p className="font-sans text-sm font-light text-candle">
        Thank you — you&rsquo;re on the list. We&rsquo;ll be in touch from West
        Prime.
      </p>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <div className="flex items-center border-b border-white/20 focus-within:border-gold">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Email address"
          className="w-full bg-transparent py-3 font-sans text-sm text-cream placeholder:text-stone/70 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="ml-2 text-gold transition-transform duration-300 hover:translate-x-1"
        >
          <IconArrow className="h-5 w-5" />
        </button>
      </div>
      {error && (
        <p className="mt-2 font-sans text-[0.7rem] text-red-300/90">{error}</p>
      )}
    </form>
  );
}
