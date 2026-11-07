import SEOPage from "@/components/SEOPage";

export const metadata = {
  alternates: { canonical: "/menu-qr-code-generator" },
  title: "Menu QR Code Generator | Digital Restaurant Menus",
  description:
    "Create QR codes for restaurant menus. Share menu links or PDFs instantly with customers.",
};

export default function Page() {
  return (
    <SEOPage
      title="Menu QR Code Generator"
      description="Create QR codes for restaurant menus, cafes, bars and hotels. Perfect for contactless dining."
      keyword="Menu QR Code Generator"
      qrType="Menu"
    >
      <h2>How a menu QR code works</h2>
      <p>
        A menu QR code links to your menu online. Guests scan it from the table
        and the menu opens on their phone. It can point to a menu page on your
        website, a PDF, or your listing on a delivery app.
      </p>

      <h2>Choosing where the code points</h2>
      <ul>
        <li><strong>A menu page on your website</strong> is the best option. You can update dishes and prices any time and the printed QR code keeps working.</li>
        <li><strong>A PDF menu</strong> is quick to set up. Upload it somewhere with a permanent link (your website, Google Drive with link sharing on, or Dropbox) and keep the same file name when you update it.</li>
        <li><strong>A delivery app listing</strong> works well for takeaway flyers.</li>
      </ul>

      <h2>Printing it for tables</h2>
      <ul>
        <li>Print the code at least 3 cm wide on table tents, coasters or stickers.</li>
        <li>Add a short call to action under it, like &ldquo;Scan for menu&rdquo;.</li>
        <li>Matte finishes scan better than glossy ones under restaurant lighting.</li>
        <li>Add your logo in the centre. MonkScanner raises the error correction automatically so the code still scans.</li>
      </ul>

      <h2>Make the menu itself phone-friendly</h2>
      <p>
        Guests read the menu on a small screen, so use large text, clear
        sections and prices that are easy to find. A long, unscaled PDF meant
        for printing is hard to read on a phone. A simple web page usually
        works better.
      </p>
    </SEOPage>
  );
}