"use client";

import { useState } from "react";

export default function ReservationForm() {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    name: "",
    guests: "2",
    date: "",
    time: "18:00",
  });
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim()) return setError("Please tell us your name.");
    if (!form.date) return setError("Please choose a date.");
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-md border border-candle/25 bg-noir/60 p-10 text-center">
        <span className="script text-4xl text-candle">Salamat</span>
        <h3 className="mt-2 font-serif text-2xl text-cream">
          Your table is requested
        </h3>
        <p className="mt-3 max-w-sm font-sans text-sm font-light text-stone">
          Thank you, {form.name.split(" ")[0]}. We&rsquo;ve noted a table for{" "}
          {form.guests} on {formatDate(form.date)} at {form.time}. Our team will
          confirm shortly.
        </p>
        <button
          onClick={() => {
            setDone(false);
            setForm({ name: "", guests: "2", date: "", time: "18:00" });
          }}
          className="mt-7 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-candle underline-offset-4 hover:underline"
        >
          Book another table
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-md border border-white/10 bg-noir/60 p-7 md:p-9"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="r-name">
            Name
          </label>
          <input
            id="r-name"
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Your full name"
            className="field-input"
          />
        </div>

        <div>
          <label className="field-label" htmlFor="r-guests">
            Guests
          </label>
          <select
            id="r-guests"
            value={form.guests}
            onChange={update("guests")}
            className="field-input"
            style={{ colorScheme: "dark" }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n} className="bg-noir">
                {n} {n === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="field-label" htmlFor="r-date">
            Date
          </label>
          <input
            id="r-date"
            type="date"
            min={today}
            value={form.date}
            onChange={update("date")}
            className="field-input"
            style={{ colorScheme: "dark" }}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="r-time">
            Time
          </label>
          <select
            id="r-time"
            value={form.time}
            onChange={update("time")}
            className="field-input"
            style={{ colorScheme: "dark" }}
          >
            {[
              "11:00",
              "11:30",
              "12:00",
              "17:00",
              "17:30",
              "18:00",
              "18:30",
              "19:00",
              "19:30",
              "20:00",
            ].map((t) => (
              <option key={t} value={t} className="bg-noir">
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <p className="mt-5 font-sans text-[0.72rem] tracking-wide text-red-300/90">
          {error}
        </p>
      )}

      <button type="submit" className="btn-cream mt-8 w-full">
        BOOK A TABLE
      </button>
      <p className="mt-4 text-center font-sans text-[0.66rem] font-light text-stone">
        Lunch &amp; dinner daily · Cafe from early morning · Room service for
        guests
      </p>
    </form>
  );
}

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(iso + "T00:00:00").toLocaleDateString("en-PH", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}
