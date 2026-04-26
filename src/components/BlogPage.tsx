import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QRGenerator from "@/components/QRGenerator";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AdUnit from "@/components/AdUnit";
const relatedLinks = [
  {
    title: "Free QR Code Generator",
    href: "/blog/free-qr-code-generator",
  },
  {
    title: "How to Create a QR Code",
    href: "/blog/how-to-create-qr-code",
  },
  {
    title: "QR Code Best Practices",
    href: "/blog/qr-code-best-practices",
  },
  {
    title: "QR Code Marketing Guide",
    href: "/blog/qr-code-marketing-guide",
  },
  {
    title: "URL QR Code Generator",
    href: "/url-qr-code-generator",
  },
  {
    title: "WiFi QR Code Generator",
    href: "/wifi-qr-code-generator",
  },
  {
    title: "vCard QR Code Generator",
    href: "/vcard-qr-code-generator",
  },
  {
    title: "WhatsApp QR Code Generator",
    href: "/whatsapp-qr-code-generator",
  },
  {
    title: "Menu QR Code Generator",
    href: "/menu-qr-code-generator",
  },
];

export default function BlogPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="bg-[#fbfbfc]">
      <Header />

      <article className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 md:p-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-yellow-600">
            QR Code Guide
          </p>
      <AdUnit slot="1234567893" className="my-8" />
          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            {title}
          </h1>

          <div className="prose prose-lg mt-8 max-w-none text-gray-600 prose-headings:text-gray-950 prose-headings:font-black prose-a:text-yellow-600 prose-a:font-bold">
            {children}
          </div>

          <div className="mt-12 rounded-3xl bg-yellow-50 p-6 ring-1 ring-yellow-200">
            <h2 className="text-2xl font-black text-gray-950">
              Create Your QR Code
            </h2>
            <p className="mt-3 leading-7 text-gray-700">
              Use MonkScanner’s free QR code generator to create custom QR codes
              for URLs, WiFi, vCards, WhatsApp, menus, flyers, events and
              marketing campaigns.
            </p>
            <Link
              href="/"
              className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-5 py-3 font-black text-black hover:bg-yellow-300"
            >
              Open Free QR Generator <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-black">Related QR Code Guides</h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 text-sm font-bold hover:border-yellow-300 hover:bg-yellow-50"
                >
                  {item.title}
                  <ArrowRight size={16} className="text-yellow-600" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <QRGenerator />
      </section>

      <Footer />
    </main>
  );
}