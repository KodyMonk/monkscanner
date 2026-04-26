import SimplePage from "@/components/SimplePage";

export const metadata = {
  title: "Terms and Conditions | MonkScanner",
  description:
    "Read the MonkScanner terms and conditions for using the free QR code generator.",
};

export default function TermsPage() {
  return (
    <SimplePage
      title="Terms and Conditions"
      subtitle="By using MonkScanner, you agree to use the QR code generator responsibly and ensure that the content linked through your QR codes complies with applicable laws and platform rules."
      bullets={[
        "Use MonkScanner responsibly",
        "Do not create QR codes for harmful or illegal content",
        "You are responsible for the content you link",
        "Generated QR codes should be tested before printing",
        "Features may change as MonkScanner improves",
        "Contact: info@monkscanner.com",
      ]}
    />
  );
}