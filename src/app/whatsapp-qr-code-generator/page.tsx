import SEOPage from "@/components/SEOPage";

export const metadata = {
  alternates: { canonical: "/whatsapp-qr-code-generator" },
  title: "WhatsApp QR Code Generator | Chat Instantly",
  description:
    "Create WhatsApp QR codes to start chats instantly. Perfect for businesses and customer support.",
};

export default function Page() {
  return (
    <SEOPage
      title="WhatsApp QR Code Generator"
      description="Allow customers to start WhatsApp chats instantly using a QR code."
      keyword="WhatsApp QR Code Generator"
      qrType="WhatsApp"
    >
      <h2>How a WhatsApp QR code works</h2>
      <p>
        A WhatsApp QR code opens a chat with your number using WhatsApp&rsquo;s
        official click-to-chat link (<code>https://wa.me/</code>). You can add a
        pre-filled message, such as &ldquo;Hi, I would like to book a
        table&rdquo;, so customers only need to press send.
      </p>

      <h2>Entering the number correctly</h2>
      <ul>
        <li>Use the full international number with the country code and no plus sign, spaces or leading zeros. For example, a Bahrain number is written as 973 followed by the 8-digit number.</li>
        <li>The number must be registered on WhatsApp or WhatsApp Business.</li>
        <li>Keep the pre-filled message short. Customers can still edit it before sending.</li>
      </ul>

      <h2>Ideas for businesses</h2>
      <ul>
        <li>Restaurants and lounges: reservations from flyers, menus and Instagram stories.</li>
        <li>Shops: product questions from packaging or shelf tags.</li>
        <li>Events: RSVPs and guest-list requests from posters.</li>
        <li>Services: quote requests from vehicles, signboards and business cards.</li>
      </ul>

      <h2>Personal and business accounts</h2>
      <p>
        The same link format works for both regular WhatsApp and WhatsApp
        Business. For a business, a WhatsApp Business number lets you add
        quick replies, opening hours and a catalogue that customers see as
        soon as the chat opens.
      </p>
    </SEOPage>
  );
}