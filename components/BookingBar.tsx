"use client";

import { useState } from "react";
import { IconArrow } from "@/components/Icons";

export default function BookingBar() {
  const today = new Date().toISOString().split("T")[0];
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!checkIn || !checkOut) {
      setError("Please choose your dates.");
      return;
    }
    if (checkOut <= checkIn) {
      setError("Check-out must be after check-in.");
      return;
    }
    setDone(true);
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <form
      onSubmit={submit}
      className="w-full rounded-2xl border border-white/15 bg-espresso/60 p-2 backdrop-blur-md shadow-[0_24px_70px_-30px_rgba(0,0,0,0.8)]"
    >
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.8fr_auto]">
        <Field label="Check-in">
          <input
            type="date"
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="booking-input"
            aria-label="Check-in date"
          />
        </Field>
        <Field label="Check-out">
          <input
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="booking-input"
            aria-label="Check-out date"
          />
        </Field>
        <Field label="Guests">
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="booking-input"
            aria-label="Number of guests"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n} className="bg-espresso text-cream">
                {n} {n === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </Field>
        <div className="flex items-stretch bg-espresso p-2">
          <button type="submit" className="btn-gold w-full whitespace-nowrap">
            {done ? "Confirmed" : "Check Availability"}
            {!done && <IconArrow className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="flex min-h-[1.5rem] items-center justify-center px-3 pt-2">
        {error && (
          <p className="font-sans text-[0.7rem] tracking-wide text-red-300/90">
            {error}
          </p>
        )}
        {done && (
          <p className="font-sans text-[0.7rem] tracking-wide text-candle">
            Thank you — a reservations host will confirm your stay shortly.
          </p>
        )}
      </div>

      <style jsx>{`
        :global(.booking-input) {
          width: 100%;
          background: rgba(28, 26, 23, 0.85);
          color: #f1ebe1;
          font-family: var(--font-body);
          font-size: 0.85rem;
          padding: 0.55rem 0.25rem 0;
          border: none;
          outline: none;
          color-scheme: dark;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col bg-espresso px-4 py-3 text-left">
      <span className="caption text-[0.55rem] text-gold">{label}</span>
      {children}
    </label>
  );
}
