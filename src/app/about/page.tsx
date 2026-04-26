import SimplePage from "@/components/SimplePage";

export const metadata = {
  title: "About MonkScanner | Free QR Code Generator",
  description:
    "MonkScanner is a free online QR code generator for creating custom QR codes with logo, colors and high-quality downloads.",
};

export default function AboutPage() {
  return (
    <SimplePage
      title="About MonkScanner"
      subtitle="MonkScanner is built to make QR code creation simple, fast and accessible for everyone — from small businesses to creators, restaurants, agencies and everyday users."
      bullets={[
        "Free QR code generation",
        "No account required",
        "Clean and simple interface",
        "Built for mobile and desktop",
        "Useful for business and personal use",
        "Designed for future dynamic QR tools",
      ]}
    />
  );
}