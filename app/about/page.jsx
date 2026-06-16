import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="bg-slate-950 text-white min-h-screen">
            <section className="mx-auto max-w-5xl px-6 py-16">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="inline-flex rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300">
                            About
                        </p>

                        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
                            Invent and manage with confidence
                        </h1>

                        <p className="mt-4 text-lg text-slate-300">
                            Revenio is a compact inventory starter app built
                            with Next.js and Firebase. It focuses on clear UX,
                            accessibility, and simple tooling so you can iterate
                            quickly.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/items"
                                className="inline-flex items-center rounded-3xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500"
                            >
                                Browse items
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center rounded-3xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800"
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/6 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-6">
                        <h3 className="text-sm font-semibold text-slate-300">
                            What we value
                        </h3>
                        <ul className="mt-4 grid gap-4">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                                    A
                                </div>
                                <div>
                                    <p className="font-semibold">
                                        Accessible by default
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Clear focus states and keyboard-friendly
                                        interactions.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
                                    P
                                </div>
                                <div>
                                    <p className="font-semibold">
                                        Performance-minded
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Lightweight patterns and client/server
                                        boundaries when needed.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-white">
                                    S
                                </div>
                                <div>
                                    <p className="font-semibold">
                                        Simple to extend
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Well-scoped components and predictable
                                        data flows.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 grid gap-10 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/6 bg-slate-900/50 p-6">
                        <h4 className="text-lg font-semibold">
                            Getting started
                        </h4>
                        <p className="mt-3 text-sm text-slate-300">
                            Clone the repo, run the dev server, and connect your
                            Firebase project for auth.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/6 bg-slate-900/50 p-6">
                        <h4 className="text-lg font-semibold">Contribute</h4>
                        <p className="mt-3 text-sm text-slate-300">
                            Pull requests are welcome. Focus on small, testable
                            improvements.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
