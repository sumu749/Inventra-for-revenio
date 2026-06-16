"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function AvatarMenu({ avatarLabel, logout }) {
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

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={containerRef}>
            <button
                type="button"
                onClick={() => setDropdownOpen((open) => !open)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-white ring-1 ring-slate-700 transition hover:bg-slate-700"
            >
                {avatarLabel}
            </button>

            {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl">
                    <Link
                        href="/items/add"
                        className="block px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900"
                    >
                        Add Item
                    </Link>
                    <Link
                        href="/items/manage"
                        className="block px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900"
                    >
                        Manage Items
                    </Link>
                    <button
                        onClick={logout}
                        className="w-full px-4 py-3 text-left text-sm text-red-400 transition hover:bg-slate-900"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
