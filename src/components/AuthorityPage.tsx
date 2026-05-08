import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QRGenerator from "@/components/QRGenerator";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Section = {
  title: string;
  body: string[];
};

type AuthorityPageProps = {
  label: string;
  title: string;
  description: string;
  sections: Section[];
  faqs: { q: string; a: string }[];
};

export default function AuthorityPage({
  label,
  title,
  description,
  sections,
  faqs,
}: AuthorityPageProps) {
  return (
    <main className="min-h-screen bg-[#fbfbfc]">
      <Header />

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 md:p-12">
          <p className="mb-3 text-sm font-black uppercase tracking-wide text-yellow-600">
            {label}
          </p>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 font-black text-black hover:bg-yellow-300"
            >
              Open Free QR Generator <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <article className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 md:p-12">
          {sections.map((section) => (
            <section key={section.title} className="mb-12 last:mb-0">
              <h2 className="text-3xl font-black">{section.title}</h2>

              {section.body.map((p) => (
                <p key={p} className="mt-5 text-lg leading-8 text-gray-600">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </article>

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 md:p-12">
          <h2 className="text-3xl font-black">Frequently Asked Questions</h2>

          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-gray-200 bg-white p-5"
              >
                <summary className="cursor-pointer text-lg font-black">
                  {item.q}
                </summary>
                <p className="mt-4 leading-7 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <QRGenerator />
      </section>

      <Footer />
    </main>
  );
}