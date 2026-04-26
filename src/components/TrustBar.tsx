import { ShieldCheck } from "lucide-react";

export default function TrustBar() {
  const items = [
    ["Unlimited", "QR Codes"],
    ["No Sign Up", "Required"],
    ["High Quality", "Downloads"],
    ["PNG, SVG, PDF", "Exports"],
    ["No Watermark", "Ever"],
  ];

  return (
    <div className="mt-10 grid gap-3 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:grid-cols-5">
      {items.map(([title, desc]) => (
        <div
          key={title}
          className="flex items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-5"
        >
          <ShieldCheck className="text-yellow-500" size={22} />
          <div>
            <div className="text-sm font-black">{title}</div>
            <div className="text-xs text-gray-500">{desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}