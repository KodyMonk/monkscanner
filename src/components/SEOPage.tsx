import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QRGenerator from "@/components/QRGenerator";
import { CheckCircle2 } from "lucide-react";
import type { QrType } from "@/lib/qr-data";

type Props = {
  title: string;
  description: string;
  keyword: string;
  qrType?: QrType;
  children?: React.ReactNode;
};

export default function SEOPage({
  title,
  description,
  keyword,
  qrType = "URL",
  children,
}: Props) {
  return (
    <main className="bg-[#fbfbfc]">
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-gray-200">
          <h1 className="text-4xl font-black md:text-5xl">
            {title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-gray-600">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            {[
              "Free QR Code Generator",
              "No Sign Up Required",
              "Download PNG, SVG, PDF",
              "Custom Design + Logo",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2"
              >
                <CheckCircle2 size={16} className="text-yellow-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GENERATOR (VERY IMPORTANT FOR SEO) */}
      <section className="mx-auto max-w-7xl px-4 pb-10">
        <QRGenerator initialType={qrType} />
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-5xl px-4 pb-20">
        <article className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-gray-200 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-black [&_h2:first-child]:mt-0 [&_li]:leading-7 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol]:text-gray-600 [&_p]:mt-4 [&_p]:leading-7 [&_p]:text-gray-600 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-gray-600">
          {children ?? (
            <>
              <h2>What is a {keyword}?</h2>
              <p>
                A {keyword} lets people open your information instantly by
                scanning a QR code with their phone camera.
              </p>
            </>
          )}
        </article>
      </section>

      <Footer />
    </main>
  );
}