"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  animalTypes,
  estimateAliplusKg,
  type AnimalType,
} from "@/lib/content";

const inputClass =
  "w-full rounded-[20px] border border-olive/30 bg-white px-4 py-3.5 text-base text-text outline-none transition focus:border-forest/50 focus:ring-2 focus:ring-forest/20";

export function RationCalculator() {
  const [animal, setAnimal] = useState<AnimalType>("vache-laitiere");
  const [headcount, setHeadcount] = useState(50);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const estimate = useMemo(
    () => estimateAliplusKg(animal, Math.max(1, headcount)),
    [animal, headcount],
  );

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (Number(captcha) !== 11) return;
    setSubmitted(true);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
      <form
        onSubmit={onSubmit}
        className="guide-panel rounded-[28px] px-6 py-8 sm:px-8 sm:py-10 lg:col-span-7 lg:px-10 lg:py-12"
      >
        <p className="pfl-subheading">Parameters</p>
        <h3 className="pfl-h3 text-dark">Your farm setup</h3>
        <p className="mt-2 text-base leading-relaxed text-text sm:text-lg">
          Estimate the optimal Aliplus quantity — then receive a recommendation
          by e-mail.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <label className="block sm:col-span-2">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-forest">
              Animal type
            </span>
            <select
              className={inputClass}
              value={animal}
              onChange={(e) => setAnimal(e.target.value as AnimalType)}
            >
              {animalTypes.map((a) => (
                <option key={a.value} value={a.value}>
                  {a.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-forest">
              Number of animals
            </span>
            <input
              type="number"
              min={1}
              className={inputClass}
              value={headcount}
              onChange={(e) => setHeadcount(Number(e.target.value))}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-forest">
              Postal code
            </span>
            <input
              className={inputClass}
              value={postal}
              onChange={(e) => setPostal(e.target.value)}
              required
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-forest">
              Full name
            </span>
            <input
              className={inputClass}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-forest">
              Phone
            </span>
            <input
              type="tel"
              className={inputClass}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-forest">
              City
            </span>
            <input
              className={inputClass}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-forest">
              E-mail for recommendations
            </span>
            <input
              type="email"
              className={inputClass}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-forest">
              Verification · 9 + 2 =
            </span>
            <input
              className={inputClass}
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              required
              inputMode="numeric"
            />
          </label>
        </div>

        <button type="submit" className="hero-pill hero-pill--green mt-8">
          Calculate ration
        </button>

        {submitted && (
          <p className="guide-note mt-6 text-sm leading-relaxed text-forest sm:text-base">
            Thank you — your request has been recorded (front-end demo). An
            Aliplus advisor will contact you to refine the ration.
          </p>
        )}
      </form>

      <aside className="lg:col-span-5">
        <div className="sticky top-28 space-y-6">
          <div className="overflow-hidden rounded-[28px] bg-forest bg-[url(/imgs/bg-graphic-three-column.svg)] bg-left bg-no-repeat p-8 text-white sm:p-10">
            <p className="pfl-subheading text-olive!">Indicative projection</p>
            <div className="mt-8 grid gap-8">
              <div>
                <p className="font-stamp text-6xl leading-none tracking-tight sm:text-7xl">
                  {estimate.dailyKg}
                  <span className="ml-2 text-2xl text-white/60">kg/day</span>
                </p>
                <p className="mt-3 text-base text-white/75">
                  Aliplus (total herd)
                </p>
              </div>
              <div className="h-px bg-white/15" />
              <div>
                <p className="font-stamp text-4xl leading-none sm:text-5xl">
                  {estimate.monthlyKg}
                  <span className="ml-2 text-lg text-white/60">kg/month</span>
                </p>
                <p className="mt-3 text-base text-white/75">
                  Stock order of magnitude
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-olive/25 bg-white px-6 py-7 sm:px-8">
            <p className="text-base leading-relaxed text-text">{estimate.note}</p>
            <div className="mt-6 flex items-end gap-2" aria-hidden>
              {[35, 55, 40, 70, 50, 65].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-md ${i % 2 === 0 ? "bg-olive/70" : "bg-forest/55"}`}
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <p className="mt-3 text-sm text-muted">
              Illustrative view of relative consumption by herd profile.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
