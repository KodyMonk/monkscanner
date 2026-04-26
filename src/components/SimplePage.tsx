import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, Mail } from "lucide-react";

type SimplePageProps = {
  title: string;
  subtitle: string;
  bullets: string[];
  contact?: boolean;
};

export default function SimplePage({
  title,
  subtitle,
  bullets,
  contact = false,
}: SimplePageProps) {
  return (
    <main className="min-h-screen bg-[#fbfbfc]">
      <Header />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 md:p-12">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-yellow-600">
              MonkScanner
            </p>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">{subtitle}</p>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {bullets.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4 font-semibold"
                >
                  <CheckCircle2 className="text-yellow-500" size={20} />
                  {item}
                </div>
              ))}
            </div>

            {contact && (
              <div className="mt-8 rounded-3xl border border-yellow-200 bg-yellow-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-400 text-black">
                    <Mail size={22} />
                  </div>

                  <div>
                    <h2 className="text-xl font-black">Feedback or Contact</h2>
                    <p className="mt-2 text-gray-700">
                      For feedback, support, bug reports or suggestions, contact us at:
                    </p>
                    <a
                      href="mailto:info@monkscanner.com"
                      className="mt-2 inline-block text-lg font-black text-yellow-700"
                    >
                      info@monkscanner.com
                    </a>
                  </div>
                </div>
              </div>
            )}

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 font-black text-black hover:bg-yellow-300"
            >
              Start Creating QR Codes <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}