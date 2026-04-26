import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Free QR Code Generator Online | Create Custom QR Codes | MonkScanner",
  description:
    "Create free custom QR codes online with MonkScanner. Generate QR codes for URLs, WiFi, vCard, email, SMS, WhatsApp, menus, coupons and social media. Download PNG, SVG and PDF with no sign-up.",
  keywords: [
    "free qr code generator",
    "qr code generator",
    "custom qr code generator",
    "qr code with logo",
    "wifi qr code generator",
    "vcard qr code generator",
    "whatsapp qr code generator",
    "menu qr code generator",
    "email qr code generator",
    "sms qr code generator",
    "social media qr code generator",
    "download qr code png",
    "download qr code svg",
    "qr code pdf download",
    "online qr code maker",
    "monkscanner",
  ],
  openGraph: {
    title: "Free QR Code Generator Online | MonkScanner",
    description:
      "Generate custom QR codes for websites, WiFi, vCard, email, WhatsApp, menus and more. Free PNG, SVG and PDF downloads.",
    type: "website",
    url: "https://monkscanner.com",
    siteName: "MonkScanner",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free QR Code Generator Online | MonkScanner",
    description:
      "Create free custom QR codes with logo, colors and high-quality downloads.",
  },
  alternates: {
    canonical: "https://monkscanner.com",
  },
  icons: {
    icon: "/monkscanner-favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MonkScanner",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free online QR code generator for creating custom QR codes for URLs, WiFi, vCard, email, SMS, WhatsApp, menus, coupons and social media.",
  };

  return (
    <html lang="en">
      <body>
        <Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}