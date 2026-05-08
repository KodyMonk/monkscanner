import AuthorityPage from "@/components/AuthorityPage";

export const metadata = {
  title: "WiFi QR Code Guide | Share WiFi Password with QR Codes",
  description:
    "Learn how WiFi QR codes work and how to share network access without typing passwords manually.",
};

export default function Page() {
  return (
    <AuthorityPage
      label="WiFi QR Code Guide"
      title="WiFi QR Code Guide: Share WiFi Without Typing Passwords"
      description="Learn how WiFi QR codes work and how homes, cafés, offices, restaurants and hotels can use them to share network access easily."
      sections={[
        {
          title: "What is a WiFi QR Code?",
          body: [
            "A WiFi QR code stores network details such as the WiFi name, password and security type. When scanned, supported phones can connect to the network without manually typing the password.",
            "This makes WiFi QR codes useful for homes, cafés, restaurants, offices, hotels, coworking spaces and guest areas.",
          ],
        },
        {
          title: "Why Use a WiFi QR Code?",
          body: [
            "WiFi passwords are often long, case-sensitive or difficult to communicate. A QR code removes that friction.",
            "Instead of printing the password or repeating it to guests, you can place a WiFi QR code near the counter, table, reception desk or meeting room.",
          ],
        },
        {
          title: "Where to Place WiFi QR Codes",
          body: [
            "Good placement depends on where guests need access. Restaurants can place WiFi QR codes on table cards. Offices can place them in meeting rooms. Hotels can place them in rooms or reception areas.",
            "Make sure the QR code is visible, easy to scan and not placed on a reflective or busy background.",
          ],
        },
        {
          title: "WiFi QR Code Security",
          body: [
            "Only share a WiFi QR code where you are comfortable sharing access. For businesses, a guest WiFi network is better than sharing the private internal network.",
            "If your password changes, create and print a new static WiFi QR code.",
          ],
        },
        {
          title: "How to Create a WiFi QR Code",
          body: [
            "Choose the WiFi QR type, enter your network name, password and security type, then generate the QR code.",
            "Test the QR code on a phone before printing or sharing it with guests.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Does a WiFi QR code show my password?",
          a: "The QR code contains the WiFi credentials needed to connect. Only share it in places where guests are allowed to connect.",
        },
        {
          q: "Can I use WiFi QR codes in restaurants?",
          a: "Yes. Restaurants and cafés commonly use WiFi QR codes for guests.",
        },
        {
          q: "What happens if I change the WiFi password?",
          a: "You need to generate a new static WiFi QR code with the updated password.",
        },
      ]}
    />
  );
}