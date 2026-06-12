"use client";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-950 text-white">
            <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-blue-600/20 to-transparent blur-3xl" />
            <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-sm shadow-blue-500/10">
                            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
                            Built for modern SaaS teams
                        </div>

                        <div className="space-y-5">
                            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Manage products, launch faster, and grow with
                                Inventra.
                            </h1>
                            <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
                                A polished inventory platform that helps teams
                                create products, onboard faster, and keep every
                                listing in sync with a beautiful dashboard.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/register"
                                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                            >
                                Start free trial
                            </a>
                            <a
                                href="/about"
                                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm text-slate-200 transition hover:bg-slate-800"
                            >
                                See features
                            </a>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10">
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                                    Active stores
                                </p>
                                <p className="mt-3 text-3xl font-semibold text-white">
                                    4.9k+
                                </p>
                            </div>
                            <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10">
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                                    Products live
                                </p>
                                <p className="mt-3 text-3xl font-semibold text-white">
                                    12.4k
                                </p>
                            </div>
                            <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10">
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                                    Onboarding
                                </p>
                                <p className="mt-3 text-3xl font-semibold text-white">
                                    3 min
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -right-10 top-10 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
                        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.9)] ring-1 ring-white/5">
                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
                                        Dashboard preview
                                    </p>
                                </div>
                                <div className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                                    Live
                                </div>
                            </div>
                            <div className="space-y-5">
                                <div className="space-y-3">
                                    <div className="h-2.5 w-2/4 rounded-full bg-slate-800" />
                                    <div className="h-2 rounded-full bg-slate-800" />
                                </div>
                                <div className="rounded-[1.75rem] bg-slate-950/95 p-5 ring-1 ring-white/5">
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="text-sm font-medium text-white">
                                            Spring Launch
                                        </span>
                                        <span className="text-xs uppercase text-slate-500">
                                            72% complete
                                        </span>
                                    </div>
                                    <div className="h-2 rounded-full bg-slate-800">
                                        <div className="h-full w-3/4 rounded-full bg-blue-500" />
                                    </div>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-3xl bg-slate-950/95 p-4 ring-1 ring-white/5">
                                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                                            Orders
                                        </p>
                                        <p className="mt-3 text-2xl font-semibold text-white">
                                            1.2k
                                        </p>
                                    </div>
                                    <div className="rounded-3xl bg-slate-950/95 p-4 ring-1 ring-white/5">
                                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                                            Conversion
                                        </p>
                                        <p className="mt-3 text-2xl font-semibold text-white">
                                            8.4%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
