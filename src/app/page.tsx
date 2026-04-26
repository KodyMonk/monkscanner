import QRGenerator from "@/components/QRGenerator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import SEOContent from "@/components/SEOContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfbfc] text-[#111827]">
      <Header />

      <section className="mx-auto max-w-7xl px-4 pb-10 pt-10">
        <div className="text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-xs font-semibold text-yellow-700">
            ⚡ 100% Free QR Code Generator
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Free <span className="text-yellow-500">QR Code</span> Generator
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Create custom QR codes for websites, WiFi, vCard, email, SMS, WhatsApp, menus,
            social media, coupons and more. Download high-quality PNG, SVG and PDF QR codes
            with no sign-up and no watermark.
          </p>
        </div>

        <QRGenerator />
        <TrustBar />
        <SEOContent />
      </section>

      <Footer />
    </main>
  );
}