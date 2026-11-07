import SimplePage from "@/components/SimplePage";

export const metadata = {
  alternates: { canonical: "/privacy-policy" },
  title: "Privacy Policy | MonkScanner",
  description:
    "How MonkScanner handles your data, cookies, analytics and advertising, including Google AdSense.",
};

export default function PrivacyPolicyPage() {
  return (
    <SimplePage
      title="Privacy Policy"
      subtitle="Last updated: 7 November 2026. This policy explains what information MonkScanner (monkscanner.com) collects, how it is used, and the choices you have."
      bullets={[
        "No account or sign-up needed",
        "QR codes are created in your browser",
        "Logos you upload stay on your device",
        "We never sell personal information",
      ]}
    >
      <h2>QR codes and uploaded files</h2>
      <p>
        MonkScanner generates QR codes directly in your web browser. The text,
        links, WiFi details, contact details and logos you enter are processed
        on your device to draw the QR code and create your download. We do not
        upload or store this content on our servers.
      </p>

      <h2>Cookies</h2>
      <p>
        Cookies are small text files stored by your browser. MonkScanner and
        our partners use cookies and similar technologies to measure how the
        site is used and to show advertising. You can block or delete cookies
        in your browser settings. The site will still work, but some ads may be
        less relevant to you.
      </p>

      <h2>Advertising (Google AdSense)</h2>
      <ul>
        <li>
          We use Google AdSense to show ads. Third-party vendors, including
          Google, use cookies to serve ads based on your previous visits to this
          website or other websites.
        </li>
        <li>
          Google&rsquo;s use of advertising cookies enables it and its partners
          to serve ads to you based on your visits to this site and/or other
          sites on the internet.
        </li>
        <li>
          You can opt out of personalised advertising in{" "}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>
          . You can also opt out of some third-party vendors&rsquo; use of
          cookies for personalised advertising at{" "}
          <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">
            aboutads.info
          </a>
          .
        </li>
        <li>
          Learn more in{" "}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
            How Google uses information from sites that use its services
          </a>
          .
        </li>
      </ul>

      <h2>Analytics</h2>
      <p>
        We use Google Analytics and Microsoft Clarity to understand how
        visitors use MonkScanner, for example which pages are visited, how
        long visits last and where the site has problems. These tools collect
        information such as your browser, device type, approximate location
        (country or city), pages viewed and interactions with the page. They
        use cookies to do this. We use this information only to improve the
        site. Microsoft Clarity masks text you type into forms.
      </p>
      <p>
        You can opt out of Google Analytics with the{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          Google Analytics opt-out browser add-on
        </a>
        . See the{" "}
        <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer">
          Microsoft Privacy Statement
        </a>{" "}
        for how Clarity handles data.
      </p>

      <h2>Contacting us</h2>
      <p>
        If you email us, we use your email address and message only to reply to
        you. We do not add you to mailing lists.
      </p>

      <h2>Children</h2>
      <p>
        MonkScanner is a general-audience tool and is not directed at children
        under 13. We do not knowingly collect personal information from
        children.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy as the site changes. The &ldquo;Last
        updated&rdquo; date at the top shows when it was last revised.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email{" "}
        <a href="mailto:info@monkscanner.com">info@monkscanner.com</a>.
      </p>
    </SimplePage>
  );
}
