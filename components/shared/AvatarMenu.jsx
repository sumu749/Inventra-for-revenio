"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function AvatarMenu({ avatarLabel, logout, user }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const pathname = usePathname();
    const containerRef = useRef(null);

    useEffect(() => {
        setDropdownOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    const displayName = user?.displayName || user?.email || "My Account";
    const email = user?.email || "";

    return (
        <div className="relative" ref={containerRef}>
            <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((open) => !open)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-white ring-1 ring-slate-700 transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {avatarLabel}
            </button>

            {dropdownOpen && (
                <div
                    role="menu"
                    aria-label="User menu"
                    className="absolute right-0 mt-3 w-60 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-xl"
                >
                    <div className="space-y-1 border-b border-white/10 px-4 py-4 text-sm">
                        <p className="font-semibold text-white">
                            {displayName}
                        </p>
                        {email ? (
                            <p className="truncate text-slate-400">{email}</p>
                        ) : null}
                    </div>
                    <div className="flex flex-col">
                        <Link
                            href="/items/add"
                            role="menuitem"
                            className="block px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900"
                            onClick={() => setDropdownOpen(false)}
                        >
                            Add Product
                        </Link>
                        <Link
                            href="/items/manage"
                            role="menuitem"
                            className="block px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900"
                            onClick={() => setDropdownOpen(false)}
                        >
                            Manage Products
                        </Link>
                        <button
                            type="button"
                            role="menuitem"
                            onClick={logout}
                            className="w-full text-left px-4 py-3 text-sm text-red-400 transition hover:bg-slate-900"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
