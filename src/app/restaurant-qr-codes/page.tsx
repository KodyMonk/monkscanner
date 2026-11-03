import AuthorityPage from "@/components/AuthorityPage";

export const metadata = {
  alternates: { canonical: "/restaurant-qr-codes" },
  title: "Restaurant QR Codes | Menus, Reviews, WiFi & Reservations",
  description:
    "Learn how restaurants use QR codes for digital menus, reviews, WiFi, reservations, ordering, offers and customer engagement.",
};

export default function Page() {
  return (
    <AuthorityPage
      label="Restaurant QR Codes"
      title="Restaurant QR Codes for Menus, Reviews, WiFi and Reservations"
      description="Learn how restaurants, cafés, bars and hotels can use QR codes to improve customer experience, reduce printing costs and connect guests to digital actions."
      sections={[
        {
          title: "Why Restaurants Use QR Codes",
          body: [
            "Restaurants use QR codes because they make information easy to access. Customers can scan a QR code to view a menu, connect to WiFi, book a table, leave a review or contact the restaurant.",
            "QR codes are especially useful because restaurant information changes often. Menus, prices, offers and opening hours can change, and digital links are easier to update than printed materials.",
          ],
        },
        {
          title: "Menu QR Codes",
          body: [
            "Menu QR codes are one of the most popular restaurant QR code uses. A customer scans the code and opens a digital menu on their phone.",
            "This works well for table tents, wall signs, hotel rooms, takeaway packaging and receipts.",
          ],
        },
        {
          title: "Review QR Codes",
          body: [
            "Restaurants can use QR codes to send customers directly to Google reviews, TripAdvisor, social pages or feedback forms.",
            "Place review QR codes near the bill, receipt, counter or table card with a polite call-to-action.",
          ],
        },
        {
          title: "WiFi QR Codes",
          body: [
            "A WiFi QR code lets guests connect to the restaurant network without typing the password manually.",
            "This improves customer convenience and reduces repeated password questions for staff.",
          ],
        },
        {
          title: "Reservation and WhatsApp QR Codes",
          body: [
            "QR codes can open reservation pages or WhatsApp chats for table bookings and inquiries.",
            "This is useful for restaurants that handle bookings through WhatsApp, Instagram or online forms.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Can restaurants use QR codes for menus?",
          a: "Yes. Menu QR codes are one of the most common restaurant QR code uses.",
        },
        {
          q: "Can QR codes reduce printing costs?",
          a: "Yes. Digital menus can reduce the need for frequent menu reprints.",
        },
        {
          q: "Can I create a restaurant QR code for free?",
          a: "Yes. You can create a free QR code using MonkScanner and link it to your menu or website.",
        },
      ]}
    />
  );
}