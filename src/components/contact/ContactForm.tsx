"use client";

import { FormEvent, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { useLocale, useT } from "@/i18n/LocaleProvider";

const topicValues = ["general", "ration", "product", "visit", "usage"] as const;

type TopicValue = (typeof topicValues)[number];

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

function Field({
  label,
  required: isRequired,
  error,
  filled,
  area,
  labelFor = true,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  filled: boolean;
  area?: boolean;
  labelFor?: boolean;
  children: (id: string) => ReactNode;
}) {
  const id = useId();
  const LabelTag = labelFor ? "label" : "span";
  return (
    <div
      className={`sheet-field ${filled ? "is-filled" : ""} ${error ? "is-error" : ""} ${area ? "sheet-field--area" : ""}`}
    >
      <LabelTag className="sheet-label" {...(labelFor ? { htmlFor: id } : {})}>
        {label}
        {isRequired ? (
          <span className="sheet-label__mark" aria-hidden>
            *
          </span>
        ) : null}
      </LabelTag>
      {children(id)}
      {error ? <p className="sheet-error">{error}</p> : null}
    </div>
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
  const t = useT().contact.form;
  const topics = topicValues.map((v) => ({ value: v, label: t.topics[v] ?? v }));
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const selected = topics.find((o) => o.value === value) ?? topics[0];

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
    <Field label={t.topic} required filled labelFor={false} error={invalid ? t.topicError : undefined}>
      {(id) => (
        <div className="sheet-field__control" ref={wrapRef}>
          <button
            id={id}
            type="button"
            className={`sheet-select ${invalid ? "is-error" : ""} ${open ? "is-open" : ""}`}
            aria-label={`${t.topic}, ${selected.label}`}
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-invalid={invalid ? true : undefined}
            onClick={() => setOpen((v) => !v)}
          >
            <span>{selected.label}</span>
            <span className="sheet-select__orb">
              <Chevron />
            </span>
          </button>
          {open && (
            <ul className="sheet-select__menu" role="listbox">
              {topics.map((o) => (
                <li key={o.value} role="presentation">
                  <button
                    type="button"
                    role="option"
                    aria-selected={o.value === value}
                    className={`sheet-select__option ${o.value === value ? "is-active" : ""}`}
                    onClick={() => {
                      onChange(o.value);
                      setOpen(false);
                    }}
                  >
                    {o.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Field>
  );
}

export function ContactForm() {
  const t = useT().contact.form;
  const locale = useLocale();
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [company, setCompany] = useState(""); // honeypot, hidden from people

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next: Partial<Record<keyof Fields, string>> = {};
    for (const key of required) {
      if (!fields[key].trim()) next[key] = t.required;
    }
    if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      next.email = t.invalidEmail;
    }
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, locale, company }),
      });
      const result = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || !result?.ok) throw new Error("send failed");
      setStatus("idle");
      setSent(true);
    } catch {
      setStatus("error");
    }
  }

  if (sent) {
    return (
      <div className="sheet-form sheet-form--sent">
        <p className="sheet-form__title">{t.sentTitle}</p>
        <p className="sheet-form__note">{t.sentNote}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="sheet-form" noValidate>
      <h2 className="sheet-form__title">{t.title}</h2>

      <ContactSelect
        value={fields.contact}
        onChange={(value) => set("contact", value)}
        invalid={Boolean(errors.contact)}
      />

      <Field label={t.name} required filled={Boolean(fields.name)} error={errors.name}>
        {(id) => (
          <input
            id={id}
            className={`sheet-input ${errors.name ? "is-error" : ""}`}
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            value={fields.name}
            onChange={(e) => set("name", e.target.value)}
          />
        )}
      </Field>

      <Field label={t.email} required filled={Boolean(fields.email)} error={errors.email}>
        {(id) => (
          <input
            id={id}
            className={`sheet-input ${errors.email ? "is-error" : ""}`}
            autoComplete="email"
            inputMode="email"
            aria-invalid={errors.email ? true : undefined}
            value={fields.email}
            onChange={(e) => set("email", e.target.value)}
          />
        )}
      </Field>

      <Field label={t.phone} filled={Boolean(fields.telephone)}>
        {(id) => (
          <input
            id={id}
            className="sheet-input"
            autoComplete="tel"
            inputMode="tel"
            value={fields.telephone}
            onChange={(e) => set("telephone", e.target.value)}
          />
        )}
      </Field>

      <Field label={t.subject} required filled={Boolean(fields.subject)} error={errors.subject}>
        {(id) => (
          <input
            id={id}
            className={`sheet-input ${errors.subject ? "is-error" : ""}`}
            aria-invalid={errors.subject ? true : undefined}
            value={fields.subject}
            onChange={(e) => set("subject", e.target.value)}
          />
        )}
      </Field>

      <Field
        label={t.message}
        required
        area
        filled={Boolean(fields.message)}
        error={errors.message}
      >
        {(id) => (
          <textarea
            id={id}
            className={`sheet-input sheet-input--area ${errors.message ? "is-error" : ""}`}
            aria-invalid={errors.message ? true : undefined}
            value={fields.message}
            onChange={(e) => set("message", e.target.value)}
          />
        )}
      </Field>

      {/* Honeypot: hidden from people, filled by bots. */}
      <div className="sheet-honeypot" aria-hidden>
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      {status === "error" ? (
        <p className="sheet-form__error" role="alert">
          {t.sendError}
        </p>
      ) : null}

      <button className="ghost-line-btn" type="submit" disabled={status === "sending"} aria-busy={status === "sending"}>
        {status === "sending" ? t.sending : t.submit}
      </button>
    </form>
  );
}
