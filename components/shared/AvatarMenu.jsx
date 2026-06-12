"use client";

import Link from "next/link";

export default function AvatarMenu({ avatarLabel, logout }) {
    return (
        <div className="relative">
            <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-white ring-1 ring-slate-700 transition hover:bg-slate-700"
            >
                {avatarLabel}
            </button>

            <div className="absolute right-0 mt-3 w-48 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl">
                <Link
                    href="/products/add"
                    className="block px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900"
                >
                    Add Product
                </Link>
                <Link
                    href="/products/manage"
                    className="block px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900"
                >
                    Manage Products
                </Link>
                <button
                    onClick={logout}
                    className="w-full px-4 py-3 text-left text-sm text-red-400 transition hover:bg-slate-900"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
