"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-shadow ${scrolled ? "shadow-md backdrop-blur bg-slate-900/70" : "bg-transparent"} `}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-semibold">
                            Revenio
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-6">
                        <Link
                            href="/"
                            className="text-slate-200 hover:text-white"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-slate-200 hover:text-white"
                        >
                            About
                        </Link>
                        <Link
                            href="/dashboard"
                            className="text-slate-200 hover:text-white"
                        >
                            Dashboard
                        </Link>
                    </nav>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setOpen((v) => !v)}
                            aria-label="Toggle menu"
                            className="p-2 rounded-md text-slate-200 hover:bg-slate-800/50"
                        >
                            {open ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden ${open ? "block" : "hidden"} bg-slate-900/95 border-t border-slate-800`}
            >
                <div className="px-4 py-3 space-y-2">
                    <Link href="/" className="block text-slate-200 py-2">
                        Home
                    </Link>
                    <Link href="/about" className="block text-slate-200 py-2">
                        About
                    </Link>
                    <Link
                        href="/dashboard"
                        className="block text-slate-200 py-2"
                    >
                        Dashboard
                    </Link>
                </div>
            </div>
        </header>
    );
}
