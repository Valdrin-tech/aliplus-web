"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";

const topics = [
  { value: "general", label: "General Enquiry" },
  { value: "ration", label: "Ration advice" },
  { value: "product", label: "Aliplus product" },
  { value: "visit", label: "Farm visit" },
  { value: "usage", label: "Usage & transition" },
] as const;

type TopicValue = (typeof topics)[number]["value"];

type Fields = {
  contact: TopicValue;
  name: string;
  email: string;
  telephone: string;
  subject: string;
  message: string;
};

const empty: Fields = {
  contact: "general",
  name: "",
  email: "",
  telephone: "",
  subject: "",
  message: "",
};

const required: (keyof Fields)[] = ["name", "email", "subject", "message"];

function Chevron() {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden>
      <path
        d="M1 1.5 6 6.5 11 1.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactSelect({
  value,
  onChange,
  invalid,
}: {
  value: TopicValue;
  onChange: (value: TopicValue) => void;
  invalid?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const selected = topics.find((t) => t.value === value) ?? topics[0];

  useEffect(() => {
    if (!open) return;
    function onPointer(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative mb-4" ref={wrapRef}>
      <span className={`contact-label ${invalid ? "is-error" : ""}`}>
        Contact*
      </span>
      <button
        type="button"
        className={`pfl-select ${invalid ? "is-error" : ""} ${open ? "is-open" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{selected.label}</span>
        <span className="pfl-select__chevron">
          <Chevron />
        </span>
      </button>
      {open && (
        <ul className="pfl-select__menu" role="listbox" id={listId}>
          {topics.map((t) => (
            <li key={t.value} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={t.value === value}
                className={`pfl-select__option ${t.value === value ? "is-active" : ""}`}
                onClick={() => {
                  onChange(t.value);
                  setOpen(false);
                }}
              >
                {t.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>(
    {},
  );
  const [sent, setSent] = useState(false);

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next: Partial<Record<keyof Fields, string>> = {};
    for (const key of required) {
      if (!fields[key].trim()) next[key] = "This field is required";
    }
    if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      next.email = "Enter a valid email";
    }
    setErrors(next);
    if (Object.keys(next).length) return;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-md bg-white p-8 text-center text-base text-text">
        Thank you for contacting us, your message has been sent.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-md bg-white p-8" noValidate>
      <h3 className="contact-form-title">Get in touch</h3>

      <ContactSelect
        value={fields.contact}
        onChange={(value) => set("contact", value)}
        invalid={Boolean(errors.contact)}
      />

      <label className="relative mb-4 block">
        <span className={`contact-label ${errors.name ? "is-error" : ""}`}>
          Name*
        </span>
        {errors.name && <p className="contact-error">{errors.name}</p>}
        <input
          className={`pfl-input ${errors.name ? "is-error" : ""}`}
          placeholder="Your name"
          autoComplete="name"
          value={fields.name}
          onChange={(e) => set("name", e.target.value)}
        />
      </label>

      <label className="relative mb-4 block">
        <span className={`contact-label ${errors.email ? "is-error" : ""}`}>
          Email*
        </span>
        {errors.email && <p className="contact-error">{errors.email}</p>}
        <input
          className={`pfl-input ${errors.email ? "is-error" : ""}`}
          placeholder="Your email"
          autoComplete="email"
          value={fields.email}
          onChange={(e) => set("email", e.target.value)}
        />
      </label>

      <label className="relative mb-4 block">
        <span className="contact-label">Phone</span>
        <input
          className="pfl-input"
          placeholder="Your phone"
          autoComplete="tel"
          value={fields.telephone}
          onChange={(e) => set("telephone", e.target.value)}
        />
      </label>

      <label className="relative mb-4 block">
        <span className={`contact-label ${errors.subject ? "is-error" : ""}`}>
          Subject*
        </span>
        {errors.subject && <p className="contact-error">{errors.subject}</p>}
        <input
          className={`pfl-input ${errors.subject ? "is-error" : ""}`}
          placeholder="Subject"
          value={fields.subject}
          onChange={(e) => set("subject", e.target.value)}
        />
      </label>

      <label className="relative mb-4 block">
        <span className={`contact-label ${errors.message ? "is-error" : ""}`}>
          Message*
        </span>
        {errors.message && <p className="contact-error">{errors.message}</p>}
        <textarea
          className={`pfl-input pfl-input--area ${errors.message ? "is-error" : ""}`}
          placeholder="Your message"
          value={fields.message}
          onChange={(e) => set("message", e.target.value)}
        />
      </label>

      <button className="pfl-btn pfl-btn--green mt-2" type="submit">
        Submit
      </button>
    </form>
  );
}
