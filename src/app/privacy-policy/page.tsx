import SimplePage from "@/components/SimplePage";

export const metadata = {
  title: "Privacy Policy | MonkScanner",
  description:
    "Read the MonkScanner privacy policy for our free online QR code generator.",
};

export default function PrivacyPolicyPage() {
  return (
    <SimplePage
      title="Privacy Policy"
      subtitle="MonkScanner is designed to be simple and privacy-friendly. Static QR codes are generated in your browser, and we aim to collect as little information as possible during the launch phase."
      bullets={[
        "We do not require sign-up for QR generation",
        "Static QR codes are created client-side",
        "Uploaded logos are used only for QR creation",
        "We do not sell personal information",
        "Future analytics features may have separate notices",
        "Contact: info@monkscanner.com",
      ]}
    />
  );
}