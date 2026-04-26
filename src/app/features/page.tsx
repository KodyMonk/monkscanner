import SimplePage from "@/components/SimplePage";

export const metadata = {
  title: "QR Code Generator Features | MonkScanner",
  description:
    "Explore MonkScanner features including QR code customization, logo upload, colors, dot styles, eye styles and PNG, SVG and PDF downloads.",
};

export default function FeaturesPage() {
  return (
    <SimplePage
      title="MonkScanner Features"
      subtitle="Create professional QR codes with customization tools designed for websites, business cards, menus, flyers, posters and marketing campaigns."
      bullets={[
        "QR code with logo",
        "Custom colors",
        "Dot and eye styles",
        "PNG, SVG and PDF exports",
        "WiFi, vCard and WhatsApp QR codes",
        "No sign-up required",
      ]}
    />
  );
}