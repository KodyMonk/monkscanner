import SEOPage from "@/components/SEOPage";

export const metadata = {
  alternates: { canonical: "/vcard-qr-code-generator" },
  title: "vCard QR Code Generator | Share Contact Instantly",
  description:
    "Create vCard QR codes for sharing contact details instantly. Perfect for business cards.",
};

export default function Page() {
  return (
    <SEOPage
      title="vCard QR Code Generator"
      description="Share your contact details instantly using QR codes. Ideal for networking and business cards."
      keyword="vCard QR Code Generator"
      qrType="vCard"
    >
      <h2>What a vCard QR code contains</h2>
      <p>
        A vCard QR code holds a digital contact card: name, phone, email,
        company and website, in the vCard 3.0 format that phones use for
        contacts. Scanning it opens a &ldquo;Create contact&rdquo; screen with
        everything filled in, so people save your details correctly in one tap.
      </p>

      <h2>Filling it in</h2>
      <ul>
        <li>Write your phone number with the country code, for example +973 for Bahrain, so it works internationally.</li>
        <li>Use the email and website you actually want people to use. Empty fields are left out of the card.</li>
        <li>Your company name is saved in the contact&rsquo;s organisation field.</li>
      </ul>

      <h2>Keep the code easy to scan</h2>
      <p>
        A vCard stores more text than a simple link, so the QR code has more
        modules (small squares). Print it at least 2.5 cm (1 inch) wide, keep
        strong contrast between the code and background, and test it before a
        large print run.
      </p>

      <h2>Where to use it</h2>
      <ul>
        <li>The back of business cards</li>
        <li>Email signatures and LinkedIn banners</li>
        <li>Conference badges and event name tags</li>
        <li>Shop counters and reception desks</li>
      </ul>
    </SEOPage>
  );
}