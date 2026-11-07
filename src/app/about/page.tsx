import SimplePage from "@/components/SimplePage";

export const metadata = {
  alternates: { canonical: "/about" },
  title: "About MonkScanner | Free QR Code Generator",
  description:
    "MonkScanner is a free, privacy-friendly QR code generator made in Bahrain by a designer who uses QR codes in real event and marketing work.",
};

export default function AboutPage() {
  return (
    <SimplePage
      title="About MonkScanner"
      subtitle="MonkScanner is a free QR code generator made in Bahrain. It was built by a designer and developer who designs event flyers, menus and marketing material with QR codes, and wanted a tool that is fast, good-looking and doesn’t ask you to sign up."
      bullets={[
        "Free, with no sign-up",
        "Codes made in your browser",
        "Logo, colours and dot styles",
        "PNG, SVG and print-ready PDF",
      ]}
    >
      <h2>Why we made it</h2>
      <p>
        Many free QR code sites make you create an account, add watermarks, or
        quietly turn your code into a &ldquo;dynamic&rdquo; link that stops
        working when a free trial ends. That is a real problem when the code is
        already printed on a thousand flyers.
      </p>
      <p>
        MonkScanner makes static QR codes. Your link, WiFi details or contact
        card is stored inside the code itself, so it keeps working forever and
        does not depend on our servers.
      </p>

      <h2>What you can make</h2>
      <ul>
        <li>QR codes for websites, social media, menus and app links</li>
        <li>WiFi QR codes that let guests join your network without typing a password</li>
        <li>vCard contact QR codes for business cards</li>
        <li>WhatsApp, phone, SMS and email QR codes</li>
      </ul>

      <h2>How the site is funded</h2>
      <p>
        MonkScanner is free to use and supported by advertising. Ads help pay
        for hosting and new features. See our privacy policy for details on
        cookies and ads.
      </p>

      <h2>Get in touch</h2>
      <p>
        Found a bug or have an idea for a feature? Email{" "}
        <a href="mailto:info@monkscanner.com">info@monkscanner.com</a>.
      </p>
    </SimplePage>
  );
}
