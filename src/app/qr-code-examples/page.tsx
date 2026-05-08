import AuthorityPage from "@/components/AuthorityPage";

export const metadata = {
  title: "QR Code Examples | Practical QR Code Ideas for Business & Marketing",
  description:
    "Explore practical QR code examples for websites, menus, business cards, events, packaging, flyers, WiFi, WhatsApp and social media.",
};

export default function Page() {
  return (
    <AuthorityPage
      label="QR Code Examples"
      title="QR Code Examples for Business, Marketing and Everyday Use"
      description="Explore practical QR code examples you can use for websites, menus, events, flyers, packaging, business cards, WiFi access, WhatsApp chats and social media promotion."
      sections={[
        {
          title: "Why QR Code Examples Matter",
          body: [
            "QR codes are simple, but the way you use them determines whether people actually scan them. A QR code works best when it gives users a clear reason to take action, such as viewing a menu, opening a booking page, saving contact details or claiming an offer.",
            "The strongest QR code examples connect offline attention with online action. A printed flyer can lead to a landing page. A restaurant table card can open a digital menu. A business card can save contact details. A product package can link to instructions or reviews.",
          ],
        },
        {
          title: "Website QR Code Example",
          body: [
            "A website QR code is one of the most common QR code examples. You can place it on brochures, posters, business cards, catalogs, receipts or product labels. When users scan it, they instantly open your website without typing the URL.",
            "This is useful for businesses, creators, restaurants, events and service providers. The QR code should have a short call-to-action such as “Scan to Visit Website” or “Scan to Learn More.”",
          ],
        },
        {
          title: "Restaurant Menu QR Code Example",
          body: [
            "A restaurant menu QR code allows customers to scan and view a digital menu on their phone. This reduces printing costs and makes it easier to update prices, items and seasonal offers.",
            "Menu QR codes work well on table tents, wall posters, receipts, takeaway packaging and hotel rooms. For best results, link to a mobile-friendly menu page or PDF that loads quickly.",
          ],
        },
        {
          title: "Business Card QR Code Example",
          body: [
            "A vCard QR code on a business card can save your contact information directly to a phone. This is useful for networking, sales meetings, events and professional introductions.",
            "Instead of asking someone to manually type your number or email, they scan the QR code and save your details in seconds.",
          ],
        },
        {
          title: "Marketing QR Code Example",
          body: [
            "Marketing campaigns can use QR codes to drive people to landing pages, coupons, videos, product pages, WhatsApp chats or signup forms. This makes offline campaigns more measurable and interactive.",
            "For flyers and posters, place the QR code near the main call-to-action and make it large enough to scan easily from the expected distance.",
          ],
        },
      ]}
      faqs={[
        {
          q: "What is the most common QR code example?",
          a: "The most common QR code example is a URL QR code that opens a website, landing page, menu or social media profile.",
        },
        {
          q: "Can I use QR codes on printed materials?",
          a: "Yes. QR codes are commonly used on flyers, posters, menus, business cards, packaging and banners.",
        },
        {
          q: "What makes a good QR code example?",
          a: "A good QR code example has a clear purpose, strong contrast, enough margin, readable size and a clear call-to-action.",
        },
      ]}
    />
  );
}