import AuthorityPage from "@/components/AuthorityPage";

export const metadata = {
  title: "Business Card QR Code Guide | vCard QR Codes for Networking",
  description:
    "Learn how to use QR codes on business cards to share contact details, websites, portfolios, social profiles and vCards.",
};

export default function Page() {
  return (
    <AuthorityPage
      label="Business Card QR Code"
      title="Business Card QR Code Guide for Networking"
      description="Learn how to use QR codes on business cards to share contact details, websites, portfolios, social media profiles and vCards instantly."
      sections={[
        {
          title: "Why Add a QR Code to a Business Card?",
          body: [
            "A business card QR code makes it easier for people to save your details instead of manually typing your phone number, email or website.",
            "This is useful for freelancers, agencies, real estate agents, consultants, sales teams, event organizers and business owners.",
          ],
        },
        {
          title: "vCard QR Codes",
          body: [
            "A vCard QR code can store your name, phone number, email, company and website. When scanned, users can save your contact information directly to their phone.",
            "This makes vCard QR codes one of the best options for business cards and networking events.",
          ],
        },
        {
          title: "Website and Portfolio QR Codes",
          body: [
            "If your website or portfolio is more important than saving contact details, you can create a URL QR code instead.",
            "This is ideal for designers, photographers, developers, agencies and professionals who want users to see their work quickly.",
          ],
        },
        {
          title: "Design Tips for Business Cards",
          body: [
            "Keep the QR code large enough to scan comfortably and avoid placing it too close to the card edges.",
            "Use a clear call-to-action like “Scan to Save Contact” or “Scan to View Portfolio.”",
          ],
        },
        {
          title: "Testing Before Printing",
          body: [
            "Always test your business card QR code at the final printed size. A QR code that scans on a screen may fail if printed too small.",
            "Use high contrast, enough quiet zone and a print-friendly format such as SVG.",
          ],
        },
      ]}
      faqs={[
        {
          q: "What type of QR code is best for business cards?",
          a: "A vCard QR code is usually best if you want people to save your contact details.",
        },
        {
          q: "Can I link a business card QR code to my website?",
          a: "Yes. You can use a URL QR code to link to your website, portfolio or social profile.",
        },
        {
          q: "Should I test the QR code before printing?",
          a: "Yes. Always scan the final design before printing business cards.",
        },
      ]}
    />
  );
}