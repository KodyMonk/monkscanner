import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "QR Code Blog | Guides, Tips & Marketing Ideas | MonkScanner",
  description:
    "Read QR code guides, marketing ideas, best practices and tutorials for business, restaurants, events, flyers, Instagram and more.",
};

const posts = [
  {
    title: "Free QR Code Generator",
    desc: "Create custom QR codes for free with no sign-up, no watermark and PNG, SVG or PDF downloads.",
    href: "/blog/free-qr-code-generator",
  },
  {
    title: "How to Create a QR Code",
    desc: "Step-by-step guide to creating QR codes for websites, WiFi, contact details and more.",
    href: "/blog/how-to-create-qr-code",
  },
  {
    title: "QR Codes for Business",
    desc: "Best business QR code uses for marketing, reviews, contact sharing, menus and customer engagement.",
    href: "/blog/qr-code-for-business",
  },
  {
    title: "QR Code for Restaurant Menu",
    desc: "Learn how restaurants, cafés and bars can use QR codes for digital menus.",
    href: "/blog/qr-code-for-restaurant-menu",
  },
  {
    title: "QR Code for Instagram",
    desc: "Create Instagram QR codes for profiles, reels, posts and business pages.",
    href: "/blog/qr-code-for-instagram",
  },
  {
    title: "QR Code Best Practices",
    desc: "Design, size, color, logo, printing and scanning tips for reliable QR codes.",
    href: "/blog/qr-code-best-practices",
  },
  {
    title: "Dynamic QR Code Explained",
    desc: "Understand static vs dynamic QR codes, editable links and scan tracking.",
    href: "/blog/dynamic-qr-code-explained",
  },
  {
    title: "QR Code for Flyers",
    desc: "Use QR codes on flyers to improve campaign engagement and conversions.",
    href: "/blog/qr-code-for-flyers",
  },
  {
    title: "QR Code for Events",
    desc: "Use QR codes for tickets, check-in, registrations, maps and event promotions.",
    href: "/blog/qr-code-for-events",
  },
  {
    title: "QR Code Marketing Guide",
    desc: "QR code marketing ideas, examples and best practices for campaigns.",
    href: "/blog/qr-code-marketing-guide",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfc]">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 md:p-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-yellow-600">
            MonkScanner Blog
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            QR Code Guides, Tips & Marketing Ideas
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Learn how to create, customize and use QR codes for websites,
            businesses, restaurants, Instagram, events, flyers, marketing
            campaigns and more.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-black group-hover:text-yellow-600">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {post.desc}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm font-black text-yellow-600">
                Read Guide <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}