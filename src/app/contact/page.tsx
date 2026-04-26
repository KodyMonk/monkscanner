import SimplePage from "@/components/SimplePage";

export const metadata = {
  title: "Contact MonkScanner | QR Code Generator Support",
  description:
    "Contact MonkScanner for feedback, support, suggestions and QR code generator feature requests.",
};

export default function ContactPage() {
  return (
    <SimplePage
      title="Contact MonkScanner"
      subtitle="Have feedback, suggestions or feature requests? MonkScanner is currently in launch phase and we are improving the QR generator step by step."
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