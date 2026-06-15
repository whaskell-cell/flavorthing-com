import { SITE } from "@/lib/data";

export default function ContactPage() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="text-sm uppercase tracking-widest text-neutral-500">
          Contact
        </div>
        <h1 className="mt-4 font-serif text-5xl text-neutral-900 md:text-6xl">
          Get in touch.
        </h1>
        <p className="prose-editorial mt-10 max-w-2xl text-lg text-neutral-700">
          The fastest way to reach us is email. Tell us a little about what you
          are working on and which of our practices is the closest fit. We
          read every note.
        </p>
        <div className="mt-12">
          <a
            href={`mailto:${SITE.email}?subject=Hello%20from%20flavorthing.com`}
            className="font-serif text-3xl text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 md:text-4xl"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </section>
  );
}
