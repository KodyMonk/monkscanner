import type { QrType } from "./qr-data";

export function escapeWifi(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/:/g, "\\:");
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

    case "vCard":
      return `BEGIN:VCARD
VERSION:3.0
FN:${vName}
ORG:${vCompany}
TEL:${vPhone}
EMAIL:${vEmail}
URL:${vWebsite}
END:VCARD`;

    default:
      return content.trim() || "https://monkscanner.com";
  }
}