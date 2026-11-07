import SimplePage from "@/components/SimplePage";

export const metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact MonkScanner | QR Code Generator Support",
  description:
    "Contact MonkScanner for feedback, support, suggestions and QR code generator feature requests.",
};

export default function ContactPage() {
  return (
    <SimplePage
      title="Contact MonkScanner"
      subtitle="Have feedback, a bug to report or an idea for a new feature? Send us an email and we will get back to you."
      contact
      bullets={[
        "Feature requests",
        "Bug reports",
        "Business inquiries",
        "QR code suggestions",
        "Design feedback",
        "General support",
      ]}
    />
  );
}