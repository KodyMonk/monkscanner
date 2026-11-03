import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QRGenerator from "@/components/QRGenerator";
import BookmarkButton from "@/components/BookmarkButton";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Download,
  Globe,
  Palette,
  QrCode,
  ShieldCheck,
  Smartphone,
  Wifi,
  User,
  MessageCircle,
  Mail,
  FileText,
  Store,
  CalendarDays,
  Megaphone,
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const qrTypes = [
  {
    title: "URL QR Codes",
    desc: "Create QR codes for websites, landing pages, product pages and online forms.",
    href: "/url-qr-code-generator",
    icon: Globe,
  },
  {
    title: "WiFi QR Codes",
    desc: "Let people connect to your WiFi network without typing the password manually.",
    href: "/wifi-qr-code-generator",
    icon: Wifi,
  },
  {
    title: "vCard QR Codes",
    desc: "Share contact details instantly for business cards, networking and events.",
    href: "/vcard-qr-code-generator",
    icon: User,
  },
  {
    title: "WhatsApp QR Codes",
    desc: "Open a WhatsApp chat with a phone number and optional pre-filled message.",
    href: "/whatsapp-qr-code-generator",
    icon: MessageCircle,
  },
  {
    title: "Menu QR Codes",
    desc: "Create QR codes for restaurant menus, café menus, bar menus and digital PDFs.",
    href: "/menu-qr-code-generator",
    icon: FileText,
  },
  {
    title: "Email QR Codes",
    desc: "Create QR codes that open an email draft with recipient, subject and body.",
    href: "/qr-types",
    icon: Mail,
  },
];

const useCases = [
  {
    title: "Businesses",
    desc: "Use QR codes on business cards, packaging, receipts, brochures and customer touchpoints.",
    icon: Store,
    href: "/blog/qr-code-for-business",
  },
  {
    title: "Restaurants & Cafés",
    desc: "Share menus, booking pages, offers, WhatsApp numbers and Google review links.",
    icon: FileText,
    href: "/blog/qr-code-for-restaurant-menu",
  },
  {
    title: "Events",
    desc: "Link guests to tickets, registrations, maps, schedules, social pages and promotions.",
    icon: CalendarDays,
    href: "/blog/qr-code-for-events",
  },
  {
    title: "Marketing Campaigns",
    desc: "Add QR codes to flyers, posters, banners and packaging to drive online action.",
    icon: Megaphone,
    href: "/blog/qr-code-marketing-guide",
  },
];

const benefits = [
  {
    title: "No sign-up needed",
    desc: "Create QR codes instantly without creating an account.",
    icon: BadgeCheck,
  },
  {
    title: "High-quality downloads",
    desc: "Download PNG, SVG and PDF QR codes for digital or print use.",
    icon: Download,
  },
  {
    title: "Custom design options",
    desc: "Change colors, dot styles, corner styles, margins and upload your logo.",
    icon: Palette,
  },
  {
    title: "Mobile-friendly",
    desc: "MonkScanner works smoothly on desktop, tablet and mobile browsers.",
    icon: Smartphone,
  },
  {
    title: "Privacy focused",
    desc: "Static QR codes are generated in your browser without requiring personal data.",
    icon: ShieldCheck,
  },
  {
    title: "Multiple QR types",
    desc: "Generate QR codes for URLs, WiFi, vCard, email, SMS, WhatsApp, menus and more.",
    icon: QrCode,
  },
];

const faqs = [
  {
    q: "Is MonkScanner free to use?",
    a: "Yes. MonkScanner lets you create free static QR codes with no sign-up required. You can customize your QR code and download it in PNG, SVG or PDF format.",
  },
  {
    q: "Can I use the QR codes commercially?",
    a: "Yes. You can use QR codes generated with MonkScanner for business cards, menus, flyers, packaging, events, posters, websites and other commercial materials.",
  },
  {
    q: "What QR code formats can I download?",
    a: "You can download your QR code as PNG, SVG or PDF. PNG is useful for web and social media, SVG is ideal for design and print work, and PDF is convenient for documents.",
  },
  {
    q: "Do QR codes expire?",
    a: "Static QR codes do not expire by themselves. However, if the destination link becomes unavailable, the QR code may stop being useful. Dynamic QR codes with editable links may be added in a future phase.",
  },
  {
    q: "Why is my QR code not scanning when printed small?",
    a: "QR codes can become difficult to scan if they contain too much data, use low contrast colors, have too little quiet zone, or are printed too small. Use strong contrast, enough margin and a larger print size for best results.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfbfc]">
      <Header />

      <section className="bg-[#171717] px-4 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-400">
            ⚡ 100% Free QR Code Generator
          </div>

          <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Free <span className="text-yellow-400">QR Code</span> Generator
            Online
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-300 md:text-xl">
            Create custom QR codes for websites, WiFi, vCard, email, SMS,
            WhatsApp, menus, social media, coupons and more. Customize your QR
            code with colors, logo, dot styles and download high-quality PNG, SVG
            or PDF files with no sign-up and no watermark.
          </p>

          <BookmarkButton />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 -mt-8">
        <QRGenerator />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-yellow-50 text-yellow-600">
                  <Icon size={22} />
                </div>
                <h2 className="text-xl font-black">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 md:p-12">
          <h2 className="text-4xl font-black tracking-tight">
            What is a QR Code?
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            A QR code is a two-dimensional barcode that stores information in a
            scannable pattern. When someone scans a QR code with a smartphone
            camera, it can open a website, connect to WiFi, save contact details,
            open WhatsApp, start an email, display text or lead to a digital
            menu. QR codes are popular because they make it easy to move people
            from offline materials to online content without typing long links.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            MonkScanner helps you create QR codes quickly for personal,
            business, marketing and print use. You can generate a QR code,
            customize the look and download it in a format that fits your needs.
            Whether you are designing a flyer, menu, poster, business card,
            packaging label or event material, a clear QR code can make your
            content easier to access.
          </p>

          <h2 className="mt-12 text-3xl font-black">
            How Does a QR Code Generator Work?
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            A QR code generator converts your information into a scannable QR
            pattern. For example, if you enter a website link, the generator
            encodes that URL into the QR code. When someone scans it, their
            phone reads the data and opens the destination. The same idea works
            for WiFi details, vCard contact information, email drafts, phone
            numbers, SMS messages and WhatsApp chats.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Static QR codes store the final information directly inside the QR
            code. This makes them simple, fast and reliable for permanent links
            or information that will not change. In the future, MonkScanner may
            also support dynamic QR codes, where the QR code points to a short
            redirect link that can be edited later and tracked with analytics.
          </p>

          <h2 className="mt-12 text-3xl font-black">
            How to Create a QR Code with MonkScanner
          </h2>

          <ol className="mt-5 space-y-4 text-lg leading-8 text-gray-600">
            <li>
              <strong className="text-gray-950">1. Choose a QR type:</strong>{" "}
              Select URL, WiFi, vCard, Email, Phone, SMS, WhatsApp, Menu or
              another supported QR type.
            </li>
            <li>
              <strong className="text-gray-950">2. Enter your content:</strong>{" "}
              Add the link, contact details, network details or message you want
              the QR code to contain.
            </li>
            <li>
              <strong className="text-gray-950">3. Customize the design:</strong>{" "}
              Change colors, dot style, corner style, margin, size and upload a
              logo if needed.
            </li>
            <li>
              <strong className="text-gray-950">4. Test the QR code:</strong>{" "}
              Scan the preview with your phone before printing or sharing.
            </li>
            <li>
              <strong className="text-gray-950">5. Download your QR:</strong>{" "}
              Save your QR code as PNG, SVG or PDF.
            </li>
          </ol>

          <div className="mt-10">
            <Link
              href="/blog/how-to-create-qr-code"
              className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 font-black text-black hover:bg-yellow-300"
            >
              Read the full QR code creation guide <ArrowRight size={18} />
            </Link>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-wide text-yellow-600">
            Popular QR code types
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">
            Create QR Codes for Different Uses
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            MonkScanner supports many QR code types so you can create the right
            QR code for your website, business, restaurant, event, marketing
            material or personal use.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {qrTypes.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-yellow-50 text-yellow-600">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-black group-hover:text-yellow-600">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.desc}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-black text-yellow-600">
                  Learn More <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/qr-types"
            className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-4 font-black text-gray-800 hover:border-yellow-300 hover:bg-yellow-50 hover:text-yellow-700"
          >
            View all QR code types <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 md:p-12">
          <h2 className="text-4xl font-black tracking-tight">
            Best Practices for Creating Scannable QR Codes
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            A QR code should not only look good — it should scan reliably.
            Design choices like color, size, margin and dot style can affect how
            well a QR code works in real-world conditions. This is especially
            important when QR codes are used on printed flyers, menus, business
            cards, posters or packaging.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl bg-gray-50 p-6">
              <h3 className="text-xl font-black">Use strong contrast</h3>
              <p className="mt-3 leading-7 text-gray-600">
                A dark QR code on a light background is the safest option. Avoid
                low contrast colors or busy backgrounds behind the QR code.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-6">
              <h3 className="text-xl font-black">Keep enough quiet zone</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Leave clear empty space around the QR code so phone cameras can
                detect the pattern properly.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-6">
              <h3 className="text-xl font-black">Print at the right size</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Small QR codes can become difficult to scan, especially if they
                contain long URLs or complex designs.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-6">
              <h3 className="text-xl font-black">Test before publishing</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Always scan your QR code on multiple phones before printing,
                sharing or publishing it.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/blog/qr-code-best-practices"
              className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 font-black text-black hover:bg-yellow-300"
            >
              Read QR code best practices <ArrowRight size={18} />
            </Link>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="rounded-3xl bg-[#171717] p-8 text-white md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-yellow-400">
                QR code use cases
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Use QR Codes for Business, Events, Menus and Marketing
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-300">
                QR codes are useful anywhere people need quick access to digital
                information. Businesses use them to share links, menus, contact
                details, booking pages, offers, maps and social media profiles.
                Marketers use them to connect printed materials with online
                campaigns.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {useCases.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:bg-white/10"
                  >
                    <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-yellow-400 text-black">
                      <Icon size={20} />
                    </div>

                    <h3 className="text-lg font-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-300">
                      {item.desc}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 md:p-12">
          <h2 className="text-4xl font-black tracking-tight">
            Static vs Dynamic QR Codes
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Static QR codes store the final information directly inside the QR
            code. They are simple and useful for permanent content such as a
            website, WiFi network, phone number, email address or contact card.
            Once a static QR code is created, the encoded information cannot be
            changed without creating a new QR code.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Dynamic QR codes work differently. They store a short redirect link,
            and that redirect can later be changed. Dynamic QR codes can also
            support scan analytics, editable destinations and dashboards. For
            now, MonkScanner focuses on free static QR code generation, while
            dynamic QR features may be added later for users who need tracking
            and link editing.
          </p>

          <div className="mt-10">
            <Link
              href="/blog/dynamic-qr-code-explained"
              className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 font-black text-black hover:bg-yellow-300"
            >
              Learn about dynamic QR codes <ArrowRight size={18} />
            </Link>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-wide text-yellow-600">
            Learn more
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">
            QR Code Guides and Resources
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Explore helpful QR code guides for business, restaurants, Instagram,
            flyers, events and marketing campaigns.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "How to Create a QR Code",
              "/blog/how-to-create-qr-code",
              "Step-by-step guide for creating QR codes online.",
            ],
            [
              "QR Code for Business",
              "/blog/qr-code-for-business",
              "Best ways businesses can use QR codes.",
            ],
            [
              "QR Code for Restaurant Menu",
              "/blog/qr-code-for-restaurant-menu",
              "Use QR codes for digital menus and restaurant tables.",
            ],
            [
              "QR Code for Instagram",
              "/blog/qr-code-for-instagram",
              "Create QR codes for Instagram profiles, posts and reels.",
            ],
            [
              "QR Code for Flyers",
              "/blog/qr-code-for-flyers",
              "Add QR codes to flyers, posters and campaigns.",
            ],
            [
              "QR Code Marketing Guide",
              "/blog/qr-code-marketing-guide",
              "Use QR codes to improve marketing campaigns.",
            ],
          ].map(([title, href, desc]) => (
            <Link
              key={href}
              href={href}
              className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-black group-hover:text-yellow-600">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{desc}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-black text-yellow-600">
                Read Guide <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 md:p-12">
          <h2 className="text-4xl font-black tracking-tight">
            Frequently Asked Questions
          </h2>

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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl bg-yellow-400 p-8 text-center md:p-12">
          <h2 className="text-4xl font-black tracking-tight text-black">
            Create Your Free QR Code Now
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-black/75">
            Use MonkScanner to create a custom QR code for your website, WiFi,
            contact card, WhatsApp, menu, social media page, flyer or marketing
            campaign.
          </p>
          <Link
            href="#top"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-black px-6 py-4 font-black text-white hover:bg-gray-900"
          >
            Back to QR Generator <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}