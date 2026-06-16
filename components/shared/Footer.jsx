"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-200">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-950/90 to-slate-900/90 p-10 shadow-[0_40px_120px_-50px_rgba(15,23,42,0.7)]">
                    <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
                        <div className="space-y-5">
                            <div className="inline-flex items-center gap-4">
                                <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-500/20">
                                    I
                                </span>
                                <div>
                                    <h2 className="text-2xl font-semibold text-white">
                                        Inventra
                                    </h2>
                                    <p className="max-w-sm text-sm text-slate-400">
                                        A modern inventory SaaS toolkit for
                                        teams that move fast and sell smarter.
                                    </p>
                                </div>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-4">
                                    <p className="text-xs uppercase tracking-[0.3em] text-blue-300">
                                        Material
                                    </p>
                                    <p className="mt-2 text-lg font-semibold text-white">
                                        Designed for modern teams
                                    </p>
                                </div>
                                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-4">
                                    <p className="text-xs uppercase tracking-[0.3em] text-blue-300">
                                        Experience
                                    </p>
                                    <p className="mt-2 text-lg font-semibold text-white">
                                        Fast workflows, clean UI
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                                Product
                            </h3>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li>
                                    <Link
                                        href="/items"
                                        className="transition hover:text-white"
                                    >
                                        Items
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/items/add"
                                        className="transition hover:text-white"
                                    >
                                        Add Product
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/items/manage"
                                        className="transition hover:text-white"
                                    >
                                        Manage Products
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                                Company
                            </h3>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li>
                                    <Link
                                        href="/about"
                                        className="transition hover:text-white"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="transition hover:text-white"
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="transition hover:text-white"
                                    >
                                        Privacy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
                            <p className="text-sm uppercase tracking-[0.24em] text-blue-300">
                                Ready to grow?
                            </p>
                            <p className="text-lg font-semibold text-white">
                                Start your next product launch with Inventra.
                            </p>
                            <Link
                                href="/register"
                                className="inline-flex rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800 bg-slate-950/95 px-4 py-6 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
                © {new Date().getFullYear()} Inventra. Built for modern teams.
            </div>
        </footer>
    );
}
