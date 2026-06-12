"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import AvatarMenu from "@/components/shared/AvatarMenu";

export default function Navbar() {
    const { user, logout } = useAuth();
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const avatarLabel = user?.displayName
        ? user.displayName[0].toUpperCase()
        : user?.email
          ? user.email[0].toUpperCase()
          : "U";

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "shadow-xl backdrop-blur bg-slate-950/95"
                    : "bg-slate-950/90"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between gap-4">
                    <Link href="/" className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                            I
                        </span>
                        <span className="text-lg font-semibold tracking-tight text-white">
                            Inventra
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-6 text-slate-200 md:flex">
                        <Link href="/" className="transition hover:text-white">
                            Home
                        </Link>
                        <Link
                            href="/items"
                            className="transition hover:text-white"
                        >
                            Items
                        </Link>
                        <Link
                            href="/about"
                            className="transition hover:text-white"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="transition hover:text-white"
                        >
                            Contact
                        </Link>
                    </nav>

                    <div className="hidden items-center gap-3 md:flex">
                        {!user ? (
                            <>
                                <Link
                                    href="/login"
                                    className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-100 transition hover:border-slate-500 hover:text-white"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                                >
                                    Register
                                </Link>
                            </>
                        ) : (
                            <AvatarMenu
                                avatarLabel={avatarLabel}
                                logout={logout}
                            />
                        )}
                    </div>

                    <button
                        onClick={() => setOpen((value) => !value)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-slate-500 hover:text-white md:hidden"
                        aria-label="Toggle mobile menu"
                    >
                        {open ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-5 w-5"
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
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-5 w-5"
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

            <div
                className={`${open ? "block" : "hidden"} border-t border-slate-800 bg-slate-950/95 md:hidden`}
            >
                <div className="space-y-1 px-4 py-4">
                    <Link
                        href="/"
                        className="block rounded-lg px-3 py-2 text-slate-200 transition hover:bg-slate-900 hover:text-white"
                    >
                        Home
                    </Link>
                    <Link
                        href="/items"
                        className="block rounded-lg px-3 py-2 text-slate-200 transition hover:bg-slate-900 hover:text-white"
                    >
                        Items
                    </Link>
                    <Link
                        href="/about"
                        className="block rounded-lg px-3 py-2 text-slate-200 transition hover:bg-slate-900 hover:text-white"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="block rounded-lg px-3 py-2 text-slate-200 transition hover:bg-slate-900 hover:text-white"
                    >
                        Contact
                    </Link>
                    {!user ? (
                        <>
                            <Link
                                href="/login"
                                className="block rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-slate-200 transition hover:bg-slate-900/95 hover:text-white"
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="block rounded-lg bg-blue-600 px-3 py-2 text-center text-white transition hover:bg-blue-500"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/products/add"
                                className="block rounded-lg px-3 py-2 text-slate-200 transition hover:bg-slate-900 hover:text-white"
                            >
                                Add Product
                            </Link>
                            <Link
                                href="/products/manage"
                                className="block rounded-lg px-3 py-2 text-slate-200 transition hover:bg-slate-900 hover:text-white"
                            >
                                Manage Products
                            </Link>
                            <button
                                type="button"
                                onClick={logout}
                                className="w-full rounded-lg px-3 py-2 text-left text-slate-200 transition hover:bg-slate-900 hover:text-white"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
