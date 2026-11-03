import AuthorityPage from "@/components/AuthorityPage";

export const metadata = {
  alternates: { canonical: "/whatsapp-business-qr-code" },
  title: "WhatsApp Business QR Code | Start Customer Chats Faster",
  description:
    "Learn how WhatsApp Business QR codes help customers start chats for inquiries, bookings, support and sales.",
};

export default function Page() {
  return (
    <AuthorityPage
      label="WhatsApp Business QR Code"
      title="WhatsApp Business QR Code for Customer Chats, Bookings and Sales"
      description="Learn how WhatsApp Business QR codes help customers contact you faster for inquiries, reservations, support and sales."
      sections={[
        {
          title: "What is a WhatsApp Business QR Code?",
          body: [
            "A WhatsApp Business QR code opens a chat with your phone number. You can also include a pre-filled message so customers know what to send.",
            "This is useful for restaurants, service businesses, agencies, real estate, salons, event organizers and local shops.",
          ],
        },
        {
          title: "Why Use WhatsApp QR Codes?",
          body: [
            "Many customers prefer messaging instead of calling or filling out forms. A WhatsApp QR code gives them a fast way to start a conversation.",
            "This can improve inquiries, bookings, customer support and sales conversations.",
          ],
        },
        {
          title: "Where to Place WhatsApp QR Codes",
          body: [
            "WhatsApp QR codes work well on flyers, posters, business cards, menus, websites, packaging, receipts and social media graphics.",
            "Place the QR code near a clear call-to-action such as “Scan to Chat on WhatsApp” or “Scan to Book.”",
          ],
        },
        {
          title: "WhatsApp QR Code Message Ideas",
          body: [
            "A pre-filled message can help start the conversation. For example: “Hi, I would like to make a reservation” or “Hello, I’m interested in your services.”",
            "Keep the message short and relevant to the context where the QR code is placed.",
          ],
        },
        {
          title: "How to Create a WhatsApp Business QR Code",
          body: [
            "Choose the WhatsApp QR type, enter your phone number with country code, add an optional message, customize the QR design and download it.",
            "Test the QR code on mobile before printing or sharing it.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Can a QR code open WhatsApp?",
          a: "Yes. A WhatsApp QR code can open a chat with a phone number and optional pre-filled message.",
        },
        {
          q: "Do I need WhatsApp Business?",
          a: "You can use a normal WhatsApp number, but WhatsApp Business is better for companies because it supports business profiles and customer tools.",
        },
        {
          q: "Should I include a pre-filled message?",
          a: "Yes, if you want to guide customers toward a specific action such as booking, inquiry or support.",
        },
      ]}
    />
  );
}