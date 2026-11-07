import SEOPage from "@/components/SEOPage";

export const metadata = {
  alternates: { canonical: "/wifi-qr-code-generator" },
  title: "Free WiFi QR Code Generator | Share WiFi Easily",
  description:
    "Create a WiFi QR code for instant connection. No typing passwords. Generate and download for free.",
};

export default function Page() {
  return (
    <SEOPage
      title="Free WiFi QR Code Generator"
      description="Create QR codes for WiFi networks so users can connect instantly without typing passwords."
      keyword="WiFi QR Code Generator"
      qrType="WiFi"
    >
      <h2>How a WiFi QR code works</h2>
      <p>
        A WiFi QR code stores your network name (SSID), password and security
        type in a standard format that phones understand:
        <code> WIFI:T:WPA;S:YourNetwork;P:YourPassword;;</code>. When a guest
        points their camera at it, the phone offers to join the network. Nobody
        has to read out or type a long password.
      </p>
      <p>
        iPhones (iOS 11 and later) and almost all Android phones read WiFi QR
        codes straight from the camera app, with no extra app needed.
      </p>

      <h2>How to make one</h2>
      <ol>
        <li>Enter the network name exactly as it appears, including capital letters and spaces.</li>
        <li>Type the password and pick the security type. Most home and office routers use WPA/WPA2.</li>
        <li>Choose &ldquo;No Password&rdquo; only for open networks.</li>
        <li>Download as PNG for screens or SVG/PDF for printing, then scan it once to test.</li>
      </ol>

      <h2>Where WiFi QR codes are useful</h2>
      <ul>
        <li>Caf&eacute;s, restaurants and lounges: print it on table tents or the menu.</li>
        <li>Hotels and short-term rentals: put it in the room or welcome card.</li>
        <li>Offices and co-working spaces: a guest network code at reception.</li>
        <li>At home: a framed code for visiting friends and family.</li>
      </ul>

      <h2>Security tips</h2>
      <ul>
        <li>Share a separate guest network, not the one your work devices use.</li>
        <li>If you change the WiFi password, the old QR code stops working. Make a new one.</li>
        <li>The code is created in your browser. Your network name and password are not sent to our servers.</li>
      </ul>
    </SEOPage>
  );
}