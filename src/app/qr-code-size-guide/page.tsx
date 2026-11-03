import AuthorityPage from "@/components/AuthorityPage";

export const metadata = {
  alternates: { canonical: "/qr-code-size-guide" },
  title: "QR Code Size Guide | Best QR Code Size for Print & Digital",
  description:
    "Learn the best QR code size for business cards, flyers, posters, menus, packaging and digital use. Improve QR code scan reliability.",
};

export default function Page() {
  return (
    <AuthorityPage
      label="QR Code Size Guide"
      title="QR Code Size Guide for Print and Digital Use"
      description="Learn how large a QR code should be for business cards, flyers, menus, posters, packaging and screens so it remains easy to scan."
      sections={[
        {
          title: "Why QR Code Size Matters",
          body: [
            "QR code size directly affects scan reliability. If a QR code is printed too small, phone cameras may struggle to read the pattern, especially if the QR code contains a long URL or uses custom styling.",
            "The right QR size depends on scan distance, amount of encoded data, print quality, contrast and where the QR code is placed.",
          ],
        },
        {
          title: "Minimum QR Code Size",
          body: [
            "For small printed items like business cards, a QR code should still be large enough to scan comfortably. A very small QR code may work on screen but fail after printing.",
            "As a simple rule, avoid placing highly detailed QR codes at extremely small sizes. Use strong contrast, enough margin and test before printing.",
          ],
        },
        {
          title: "QR Code Size for Flyers",
          body: [
            "Flyers are usually scanned at arm’s length, so the QR code should be clearly visible and easy to scan without zooming.",
            "Place the QR code near the call-to-action and avoid placing it over busy artwork or dark image backgrounds.",
          ],
        },
        {
          title: "QR Code Size for Posters",
          body: [
            "Posters are viewed from farther away, so QR codes must be larger than they would be on business cards or menus.",
            "A poster QR code should be large enough to scan from the expected viewing distance. Always test from the same distance users will scan from.",
          ],
        },
        {
          title: "QR Code Size for Menus and Packaging",
          body: [
            "For table menus, packaging and labels, the QR code should be placed in a clear area with enough white space around it.",
            "Glossy surfaces, curved packaging and low contrast colors can reduce scan reliability, so testing is important.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Why does my QR code stop scanning when it is small?",
          a: "Small QR codes can fail because the modules become too tiny for the camera to distinguish, especially if the QR code is dense or heavily styled.",
        },
        {
          q: "Should I use SVG for print?",
          a: "Yes. SVG is ideal for print design because it scales without losing quality.",
        },
        {
          q: "Does a long URL affect QR size?",
          a: "Yes. Longer content creates a denser QR code, which needs more size and clearer printing.",
        },
      ]}
    />
  );
}