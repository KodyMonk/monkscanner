export default function AdBanner({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto flex h-[90px] max-w-3xl items-center justify-center rounded-xl border border-gray-100 bg-gray-50 text-xs font-bold text-gray-400 ${className}`}
    >
      {label}
    </div>
  );
}