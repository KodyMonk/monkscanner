import AuthorityPage from "@/components/AuthorityPage";

export const metadata = {
  title: "Google Review QR Code | Get More Customer Reviews",
  description:
    "Learn how to create a Google review QR code to help customers leave reviews for your business quickly.",
};

export default function Page() {
  return (
    <AuthorityPage
      label="Google Review QR Code"
      title="Google Review QR Code: Help Customers Leave Reviews Faster"
      description="Learn how businesses can use QR codes to make it easier for customers to leave Google reviews and feedback."
      sections={[
        {
          title: "What is a Google Review QR Code?",
          body: [
            "A Google review QR code links customers directly to your business review page or review form. Instead of asking customers to search for your business manually, they scan and open the review page quickly.",
            "This is useful for restaurants, salons, gyms, clinics, retail shops, agencies, service providers and local businesses.",
          ],
        },
        {
          title: "Why Reviews Matter",
          body: [
            "Customer reviews influence trust and buying decisions. A business with more positive reviews often appears more credible to new customers.",
            "A QR code makes the review process easier, which can increase the chance that happy customers leave feedback.",
          ],
        },
        {
          title: "Where to Place Review QR Codes",
          body: [
            "Review QR codes can be placed on receipts, table cards, checkout counters, packaging inserts, thank-you cards, invoices or follow-up materials.",
            "The best time to ask for a review is after a positive customer experience.",
          ],
        },
        {
          title: "Review QR Code Call-to-Action Ideas",
          body: [
            "Use simple text such as “Scan to Leave a Review”, “How was your experience?” or “Share your feedback.”",
            "Avoid pressuring users. Keep the request polite, clear and easy to complete.",
          ],
        },
        {
          title: "How to Create a Google Review QR Code",
          body: [
            "Copy your Google review link, paste it into MonkScanner as a URL QR code, customize the design and download it for print or digital use.",
            "Always test the QR code before printing.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Can I create a QR code for Google reviews?",
          a: "Yes. Copy your Google review link and create a URL QR code with MonkScanner.",
        },
        {
          q: "Where should I place review QR codes?",
          a: "Place them on receipts, counters, table cards, packaging, thank-you cards or follow-up materials.",
        },
        {
          q: "Do review QR codes help get more reviews?",
          a: "They can help by making the review process faster and easier for customers.",
        },
      ]}
    />
  );
}