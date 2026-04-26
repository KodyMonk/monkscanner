import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Link as LinkIcon,
  Wifi,
  User,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Music,
  Image,
  Menu,
  Smartphone,
  Ticket,
  Share2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "QR Code Types | URL, WiFi, vCard, WhatsApp & More | MonkScanner",
  description:
    "Explore QR code types including URL, WiFi, vCard, Email, SMS, WhatsApp, Menu, Instagram, Events, Flyers and more.",
};

const qrTypes = [
  {
    title: "URL QR Code",
    desc: "Create QR codes for websites, landing pages, product pages and links.",
    href: "/url-qr-code-generator",
    icon: LinkIcon,
  },
  {
    title: "WiFi QR Code",
    desc: "Let users connect to WiFi without typing the password manually.",
    href: "/wifi-qr-code-generator",
    icon: Wifi,
  },
  {
    title: "vCard QR Code",
    desc: "Share contact details instantly for business cards and networking.",
    href: "/vcard-qr-code-generator",
    icon: User,
  },
  {
    title: "Email QR Code",
    desc: "Create QR codes that open an email draft with recipient and subject.",
    href: "/",
    icon: Mail,
  },
  {
    title: "Phone QR Code",
    desc: "Create QR codes that start a phone call when scanned.",
    href: "/",
    icon: Phone,
  },
  {
    title: "SMS QR Code",
    desc: "Let users send a pre-filled SMS message from a QR code.",
    href: "/",
    icon: MessageCircle,
  },
  {
    title: "WhatsApp QR Code",
    desc: "Open WhatsApp chats instantly with a phone number and message.",
    href: "/whatsapp-qr-code-generator",
    icon: MessageCircle,
  },
  {
    title: "Location QR Code",
    desc: "Share Google Maps links and business locations easily.",
    href: "/",
    icon: MapPin,
  },
  {
    title: "Menu QR Code",
    desc: "Create QR codes for restaurant menus, cafés, bars and hotels.",
    href: "/menu-qr-code-generator",
    icon: Menu,
  },
  {
    title: "Instagram QR Code",
    desc: "Promote Instagram profiles, posts and reels with QR codes.",
    href: "/blog/qr-code-for-instagram",
    icon: Share2,
  },
  {
    title: "Event QR Code",
    desc: "Use QR codes for tickets, registration, maps and event promotions.",
    href: "/blog/qr-code-for-events",
    icon: Ticket,
  },
  {
    title: "Flyer QR Code",
    desc: "Add QR codes to flyers, posters, banners and printed campaigns.",
    href: "/blog/qr-code-for-flyers",
    icon: Image,
  },
  {
    title: "MP3 QR Code",
    desc: "Share audio file links using a scannable QR code.",
    href: "/",
    icon: Music,
  },
  {
    title: "App QR Code",
    desc: "Send users to App Store or Play Store pages.",
    href: "/",
    icon: Smartphone,
  },
  {
    title: "Coupon QR Code",
    desc: "Share discount codes, offers and promotional links.",
    href: "/",
    icon: Ticket,
  },
];

export default function QRTypesPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfc]">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 md:p-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-yellow-600">
            MonkScanner QR Tools
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            QR Code Types
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Create different QR code types for websites, WiFi, contact sharing,
            WhatsApp chats, restaurant menus, social media, events, flyers,
            coupons and more.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 font-black text-black hover:bg-yellow-300"
          >
            Open Free QR Generator <ArrowRight size={18} />
          </Link>
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

                <h2 className="text-xl font-black group-hover:text-yellow-600">
                  {item.title}
                </h2>

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
      </section>

      <Footer />
    </main>
  );
}