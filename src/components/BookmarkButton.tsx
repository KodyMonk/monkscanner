"use client";

export default function BookmarkButton() {
  return (
    <div className="mt-6 flex justify-center">
      <button
        onClick={() => {
          alert(
            "Press CMD+D on Mac or CTRL+D on Windows to bookmark MonkScanner. On mobile, use your browser menu and choose Add to Home Screen."
          );
        }}
        className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 shadow-sm transition hover:border-yellow-300 hover:bg-yellow-50 hover:text-yellow-700"
      >
        ⭐ Save MonkScanner for later
      </button>
    </div>
  );
}