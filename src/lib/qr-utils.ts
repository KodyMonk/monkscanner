import type { QrType } from "./qr-data";

export function escapeWifi(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/:/g, "\\:");
}

// vCard 3.0 text values must escape backslashes, commas, semicolons and newlines
export function escapeVCard(value: string) {
  return (value || "")
    .trim()
    .replace(/\\/g, "\\\\")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;")
    .replace(/\r?\n/g, "\\n");
}

function relativeLuminance(hex: string) {
  const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return null;
  let h = m[1];
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(h.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// WCAG contrast ratio between two hex colors (1 to 21), or null if a color can't be parsed
export function contrastRatio(a: string, b: string) {
  const la = relativeLuminance(a);
  const lb = relativeLuminance(b);
  if (la === null || lb === null) return null;
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

export function safeFileName(name: string) {
  return (name || "monkscanner-qr").replace(/[^a-z0-9-_]/gi, "-").toLowerCase();
}

export function buildQRValue({
  selectedType,
  content,
  wifiSsid,
  wifiPassword,
  wifiSecurity,
  email,
  emailSubject,
  emailBody,
  phone,
  smsMessage,
  whatsappMessage,
  vName,
  vPhone,
  vEmail,
  vCompany,
  vWebsite,
}: any) {
  switch (selectedType as QrType) {
    case "URL":
    case "Instagram":
    case "YouTube":
    case "Facebook":
    case "MP3":
    case "Images":
    case "Menu":
    case "Apps":
    case "Location":
      return content.trim() || "https://monkscanner.com";

    case "Coupon":
    case "Text":
      return content.trim() || "Hello from MonkScanner";

    case "WiFi":
      return `WIFI:T:${wifiSecurity};S:${escapeWifi(wifiSsid)};P:${escapeWifi(wifiPassword)};;`;

    case "Email":
      return `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    case "Phone":
      return `tel:${phone}`;

    case "SMS":
      return `sms:${phone}?body=${encodeURIComponent(smsMessage)}`;

    case "WhatsApp":
      return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

    case "vCard": {
      const fullName = (vName || "").trim();
      const parts = fullName.split(/\s+/).filter(Boolean);
      const last = parts.length > 1 ? parts[parts.length - 1] : "";
      const first = parts.length > 1 ? parts.slice(0, -1).join(" ") : fullName;
      const lines = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `N:${escapeVCard(last)};${escapeVCard(first)};;;`,
        `FN:${escapeVCard(fullName)}`,
        vCompany?.trim() && `ORG:${escapeVCard(vCompany)}`,
        vPhone?.trim() && `TEL;TYPE=CELL:${vPhone.trim()}`,
        vEmail?.trim() && `EMAIL:${vEmail.trim()}`,
        vWebsite?.trim() && `URL:${vWebsite.trim()}`,
        "END:VCARD",
      ].filter(Boolean);
      return lines.join("\r\n");
    }

    default:
      return content.trim() || "https://monkscanner.com";
  }
}