"use client";

import { useState, FormEvent } from "react";
import { CONTACT_FORM_FIELDS, SITE } from "@/lib/data";

// Structured inquiry form. Field set per Brian's institutional-buyer
// priority: name, email, org, role, engagement type, budget, message.
// Submit composes a formatted mailto: to hello@flavorthing.com so the form
// is functional without a backend. A real API endpoint can replace this later.

type FieldValues = Record<string, string>;

export default function ContactPage() {
  const [values, setValues] = useState<FieldValues>({});

  function update(name: string, value: string) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `Inquiry — ${values.scope || "General"} — ${
      values.organization || "Unknown organization"
    }`;
    const lines = [
      `Name: ${values.name || ""}`,
      `Email: ${values.email || ""}`,
      `Organization: ${values.organization || ""}`,
      `Role: ${values.role || ""}`,
      `Engagement: ${values.scope || ""}`,
      `Budget: ${values.budget || ""}`,
      "",
      "Message:",
      values.message || "",
    ];
    const body = lines.join("\n");
    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <>
      {/* Hero. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            Contact
          </div>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
            Contact
          </h1>
          <p className="prose-editorial mt-10 max-w-3xl text-lg text-neutral-700 md:text-xl md:leading-relaxed">
            Tell us about the work. The form below routes directly to the
            founders. We read every inquiry and respond inside two business
            days.
          </p>
        </div>
      </section>

      {/* Form + direct email. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-[1.4fr_1fr]">
            <form onSubmit={onSubmit} className="space-y-8">
              {CONTACT_FORM_FIELDS.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-xs uppercase tracking-widest text-neutral-500"
                  >
                    {field.label}
                    {field.required ? (
                      <span className="ml-1 text-[var(--accent)]">*</span>
                    ) : null}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      rows={6}
                      value={values[field.name] || ""}
                      onChange={(e) => update(field.name, e.target.value)}
                      className="mt-3 w-full border-b border-neutral-300 bg-transparent py-2 text-base text-neutral-900 outline-none focus:border-neutral-900"
                    />
                  ) : field.type === "select" ? (
                    <select
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      value={values[field.name] || ""}
                      onChange={(e) => update(field.name, e.target.value)}
                      className="mt-3 w-full border-b border-neutral-300 bg-transparent py-2 text-base text-neutral-900 outline-none focus:border-neutral-900"
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      {("options" in field ? field.options : []).map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      value={values[field.name] || ""}
                      onChange={(e) => update(field.name, e.target.value)}
                      className="mt-3 w-full border-b border-neutral-300 bg-transparent py-2 text-base text-neutral-900 outline-none focus:border-neutral-900"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="inline-flex items-center gap-2 border border-neutral-900 bg-neutral-900 px-6 py-3 text-sm font-semibold tracking-tight text-white transition-colors hover:bg-[var(--accent)] hover:border-[var(--accent)]"
              >
                Send inquiry
              </button>
              <p className="mt-4 text-xs text-neutral-500">
                The form opens your default email client with the message
                pre-filled.
              </p>
            </form>

            <aside>
              <div className="text-xs uppercase tracking-widest text-neutral-500">
                Direct
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">
                Prefer email.
              </h2>
              <p className="mt-4 text-neutral-700">
                If you would rather skip the form, write to us directly.
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-6 inline-block text-lg font-semibold tracking-tight text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--accent)]"
              >
                {SITE.email}
              </a>

              <div className="mt-12 text-xs uppercase tracking-widest text-neutral-500">
                Office
              </div>
              <div className="mt-3 space-y-1 text-sm text-neutral-700">
                {SITE.address.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
