"use client";

export default function SearchBar({
    value,
    onChange,
    placeholder = "Search items...",
}) {
    return (
        <div className="relative">
            <svg
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
            </svg>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-2xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-white placeholder-slate-500 transition duration-200 ease-out focus:border-blue-500 focus:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}
