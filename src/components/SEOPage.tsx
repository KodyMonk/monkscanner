import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QRGenerator from "@/components/QRGenerator";
import { CheckCircle2 } from "lucide-react";

type Props = {
  title: string;
  description: string;
  keyword: string;
};

export default function SEOPage({ title, description, keyword }: Props) {
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
        <QRGenerator />
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-5xl px-4 pb-20">
        <article className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-black">
            What is a {keyword}?
          </h2>

          <p className="mt-4 text-gray-600 leading-7">
            A {keyword} allows you to instantly share information by scanning a QR code
            using any smartphone. QR codes are widely used in business, restaurants,
            marketing campaigns, product packaging and events.
          </p>

          <h2 className="mt-10 text-2xl font-black">
            Why use a {keyword}?
          </h2>

          <ul className="mt-4 space-y-3 text-gray-600">
            <li>• Fast and contactless sharing</li>
            <li>• Works on all smartphones</li>
            <li>• Perfect for marketing and promotions</li>
            <li>• No app required</li>
          </ul>

          <h2 className="mt-10 text-2xl font-black">
            How to create a {keyword}
          </h2>

          <ol className="mt-4 space-y-3 text-gray-600">
            <li>1. Enter your information in the generator above</li>
            <li>2. Customize colors, logo and design</li>
            <li>3. Download your QR code</li>
          </ol>

          <h2 className="mt-10 text-2xl font-black">
            Best practices
          </h2>

          <ul className="mt-4 space-y-3 text-gray-600">
            <li>• Use high contrast colors</li>
            <li>• Test before printing</li>
            <li>• Keep margin around QR code</li>
            <li>• Avoid overcrowding design</li>
          </ul>
        </article>
      </section>

      <Footer />
    </main>
  );
}