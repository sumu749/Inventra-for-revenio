"use client";

export default function Spinner({ className = "", label = "Loading" }) {
    return (
        <span
            className={`inline-flex items-center justify-center ${className}`}
            aria-label={label}
        >
            <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-slate-500 border-t-blue-400" />
        </span>
    );
}
