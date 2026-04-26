import { featureCards, faqs } from "@/lib/qr-data";
import { Globe, CheckCircle2 } from "lucide-react";

export default function SEOContent() {
  return (
    <>
      <section className="mt-14 rounded-3xl bg-white px-5 py-12 shadow-sm ring-1 ring-gray-200">
        <div className="text-center">
          <h2 className="text-3xl font-black">
            Powerful <span className="text-yellow-500">QR Code Features</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            MonkScanner helps you create professional QR codes online for business,
            marketing, events, restaurants, social media, contact sharing and more.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featureCards.map(([title, desc]) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-yellow-50 text-yellow-600">
                <Globe size={22} />
              </div>
              <h3 className="font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl bg-white px-5 py-12 shadow-sm ring-1 ring-gray-200">
        <h2 className="text-center text-3xl font-black">
          How to Create a QR Code in{" "}
          <span className="text-yellow-500">3 Easy Steps</span>
        </h2>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
          {[
            ["1", "Choose QR Type", "Select URL, WiFi, vCard, email, SMS, WhatsApp, menu or another QR type."],
            ["2", "Enter Your Details", "Add your link, contact information, WiFi password or message."],
            ["3", "Customize & Download", "Change colors, add a logo, adjust design and download PNG, SVG or PDF."],
          ].map(([num, title, desc]) => (
            <div key={num} className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-yellow-400 font-black">
                {num}
              </div>
              <h3 className="font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-8 rounded-3xl bg-white px-5 py-12 shadow-sm ring-1 ring-gray-200 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-black">What is a QR Code Generator?</h2>
          <p className="mt-4 leading-7 text-gray-600">
            A QR code generator is an online tool that creates scannable QR codes
            for links, text, contact details, WiFi networks, emails, phone numbers,
            WhatsApp messages, menus, coupons and social media profiles.
          </p>
          <p className="mt-4 leading-7 text-gray-600">
            With MonkScanner, you can generate custom QR codes for flyers, business
            cards, restaurant menus, posters, packaging, product labels, events,
            presentations and marketing campaigns. The QR code can be customized
            with colors, logo, dot styles, eye styles and export sizes.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-black">Popular QR Code Use Cases</h2>
          <div className="mt-5 grid gap-3">
            {[
              "Website QR code generator",
              "WiFi QR code generator",
              "vCard QR code generator",
              "WhatsApp QR code generator",
              "Menu QR code generator",
              "Email QR code generator",
              "SMS QR code generator",
              "Social media QR code generator",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-gray-50 p-3 text-sm font-semibold">
                <CheckCircle2 className="text-yellow-500" size={18} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 rounded-3xl bg-white px-5 py-12 shadow-sm ring-1 ring-gray-200">
        <h2 className="text-center text-3xl font-black">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {faqs.map(([q, a]) => (
            <details
              key={q}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-5"
            >
              <summary className="cursor-pointer font-bold">{q}</summary>
              <p className="mt-3 text-sm leading-6 text-gray-600">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}