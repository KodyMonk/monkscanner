import Link from "next/link";

const blogLinks = [
  ["Free QR Code Generator", "/blog/free-qr-code-generator"],
  ["How to Create a QR Code", "/blog/how-to-create-qr-code"],
  ["QR Code for Business", "/blog/qr-code-for-business"],
  ["QR Code Best Practices", "/blog/qr-code-best-practices"],
  ["QR Code Marketing Guide", "/blog/qr-code-marketing-guide"],
];

const resourceLinks = [
  ["QR Code Examples", "/qr-code-examples"],
  ["QR Code Use Cases", "/qr-code-use-cases"],
  ["QR Code Size Guide", "/qr-code-size-guide"],
  ["QR Code Design Guide", "/qr-code-design-guide"],
  ["Restaurant QR Codes", "/restaurant-qr-codes"],
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#060b10] px-4 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-5">
        <div>
          <div className="text-2xl font-black">
            Monk<span className="text-yellow-400">Scanner</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-400">
            A free online QR code generator for creating custom QR codes with logo,
            colors and high-quality downloads.
          </p>
        </div>

        <div>
          <h4 className="font-black">Main Pages</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li><Link href="/">QR Generator</Link></li>
            <li><Link href="/qr-types">QR Types</Link></li>
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black">QR Generators</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li><Link href="/url-qr-code-generator">URL QR Generator</Link></li>
            <li><Link href="/wifi-qr-code-generator">WiFi QR Generator</Link></li>
            <li><Link href="/vcard-qr-code-generator">vCard QR Generator</Link></li>
            <li><Link href="/whatsapp-qr-code-generator">WhatsApp QR Generator</Link></li>
            <li><Link href="/menu-qr-code-generator">Menu QR Generator</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black">Resources</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            {resourceLinks.map(([label, href]) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
            <li><Link href="/business-card-qr-code">Business Card QR Code</Link></li>
            <li><Link href="/google-review-qr-code">Google Review QR Code</Link></li>
            <li><Link href="/whatsapp-business-qr-code">WhatsApp Business QR Code</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black">Popular Guides</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            {blogLinks.map(([label, href]) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>

          <a
            href="mailto:info@monkscanner.com"
            className="mt-4 inline-block text-sm font-bold text-yellow-400"
          >
            info@monkscanner.com
          </a>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-gray-500">
        © 2026 MonkScanner. All rights reserved.
      </p>
    </footer>
  );
}