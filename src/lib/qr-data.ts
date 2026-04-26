import {
  Link,
  FileText,
  Wifi,
  User,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Music,
  Image,
  Menu,
  Smartphone,
  Ticket,
  Share2,
} from "lucide-react";

export const qrTypes = [
  { name: "URL", desc: "Website or link", icon: Link, placeholder: "Enter your URL here..." },
  { name: "Text", desc: "Plain text message", icon: FileText, placeholder: "Enter any text or message" },
  { name: "WiFi", desc: "WiFi network", icon: Wifi, placeholder: "My WiFi Network" },
  { name: "vCard", desc: "Contact information", icon: User, placeholder: "John Smith" },
  { name: "Email", desc: "Email address", icon: Mail, placeholder: "hello@example.com" },
  { name: "Phone", desc: "Phone number", icon: Phone, placeholder: "+973 1234 5678" },
  { name: "SMS", desc: "SMS message", icon: MessageCircle, placeholder: "+973 1234 5678" },
  { name: "Location", desc: "Google Maps link", icon: MapPin, placeholder: "https://maps.google.com/?q=Manama" },
  { name: "WhatsApp", desc: "WhatsApp chat", icon: MessageCircle, placeholder: "97312345678" },
  { name: "Instagram", desc: "Instagram profile URL", icon: Share2, placeholder: "https://instagram.com/username" },
  { name: "YouTube", desc: "YouTube URL", icon: Share2, placeholder: "https://youtube.com/@channel" },
  { name: "Facebook", desc: "Facebook page URL", icon: Share2, placeholder: "https://facebook.com/page" },
  { name: "MP3", desc: "Audio file URL", icon: Music, placeholder: "https://example.com/audio.mp3" },
  { name: "Images", desc: "Image gallery URL", icon: Image, placeholder: "https://example.com/gallery" },
  { name: "Menu", desc: "Menu URL or PDF link", icon: Menu, placeholder: "https://example.com/menu.pdf" },
  { name: "Apps", desc: "App Store / Play Store URL", icon: Smartphone, placeholder: "https://apps.apple.com/app/example" },
  { name: "Coupon", desc: "Coupon text or offer URL", icon: Ticket, placeholder: "SAVE20 - Get 20% off your order" },
] as const;

export type QrType = (typeof qrTypes)[number]["name"];

export const featureCards = [
  ["Many QR Types", "Support for URL, WiFi, vCard, Email, Phone, SMS, WhatsApp, social links and more."],
  ["Fully Customizable", "Change colors, logo, dots, eyes, margin, size and error correction."],
  ["High Quality Export", "Download your QR code as PNG, SVG or PDF."],
  ["No Sign-Up Required", "Create QR codes instantly without creating an account."],
  ["Privacy Focused", "Static QR codes are created directly in your browser."],
  ["Unlimited & Free", "Create unlimited QR codes for free with no hidden payment CTA."],
];

export const faqs = [
  ["Is MonkScanner really free?", "Yes. The generator is designed to be free for now with no paid CTA."],
  ["Do QR codes expire?", "Static QR codes do not expire. Dynamic QR codes can be added later with editable links and scan tracking."],
  ["Can I use the QR codes commercially?", "Yes, you can use generated QR codes for business cards, menus, flyers, posters and marketing campaigns."],
  ["What formats can I download?", "You can export your QR code as PNG, SVG and PDF."],
  ["Do I need to create an account?", "No. Phase one is designed to work without login."],
  ["Can I add my logo?", "Yes, you can upload a logo and place it in the center of your QR code."],
];