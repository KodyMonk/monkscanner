import SEOPage from "@/components/SEOPage";

export const metadata = {
  alternates: { canonical: "/url-qr-code-generator" },
  title: "Free URL QR Code Generator | Create QR Codes for Links",
  description:
    "Create a free URL QR code instantly. Generate QR codes for websites, landing pages and links. Download PNG, SVG or PDF.",
};

export default function Page() {
  return (
    <SEOPage
      title="Free URL QR Code Generator"
      description="Generate QR codes for any website URL instantly. Perfect for marketing, flyers, business cards and packaging."
      keyword="URL QR Code Generator"
      qrType="URL"
    >
      <h2>What a URL QR code does</h2>
      <p>
        A URL QR code opens a web address when it is scanned. It is the most
        common type of QR code and the simplest way to move someone from
        something printed (a flyer, poster, package or business card) to a page
        online.
      </p>

      <h2>Tips for links that scan well</h2>
      <ul>
        <li>Always include <code>https://</code> so every phone treats it as a link.</li>
        <li>Shorter links make a less dense QR code, which scans faster and can be printed smaller.</li>
        <li>Link to a page that works well on mobile. Almost everyone who scans is on a phone.</li>
        <li>Add UTM tags (for example <code>?utm_source=flyer</code>) if you want to see QR visits in Google Analytics.</li>
      </ul>

      <h2>Static codes: what that means for you</h2>
      <p>
        MonkScanner makes static QR codes. The link is stored directly inside
        the code, so it works forever, does not depend on our servers and has
        no scan limits. The trade-off is that you cannot change the link after
        printing. If the destination might change, point the code at a page you
        control, such as your own website, and update that page instead.
      </p>

      <h2>Common uses</h2>
      <ul>
        <li>Event flyers and posters linking to tickets or RSVP pages</li>
        <li>Product packaging linking to instructions or reviews</li>
        <li>Business cards linking to a portfolio or booking page</li>
        <li>Social media profiles, YouTube videos and online menus</li>
      </ul>
    </SEOPage>
  );
}