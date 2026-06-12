"use client";

export default function CTA() {
    return (
        <section className="pt-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-slate-900/80 to-violet-600/20 overflow-hidden p-12 sm:p-16">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-violet-600/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-20 blur transition-opacity pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                            <div className="max-w-2xl">
                                <p className="mb-3 inline-flex rounded-full bg-blue-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                                    Get started now
                                </p>
                                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-4">
                                    Ready to transform your business?
                                </h2>
                                <p className="text-lg text-slate-300 leading-8">
                                    Join thousands of product teams using
                                    Inventra to ship faster, scale smarter, and
                                    delight their customers with modern,
                                    responsive experiences.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                                <a
                                    href="/register"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg hover:shadow-blue-600/50 hover:shadow-2xl transition-all overflow-hidden whitespace-nowrap"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="relative">
                                        Create account
                                    </span>
                                </a>
                                <a
                                    href="/about"
                                    className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/20 rounded-xl hover:border-blue-400/50 hover:bg-white/5 transition-all"
                                >
                                    Learn more
                                    <span className="ml-2 inline-block transform transition-transform group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* Bottom accent */}
                        <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between text-sm text-slate-400">
                            <p>
                                ✨ No credit card required. Start building
                                today.
                            </p>
                            <div className="flex gap-4">
                                <span>30-day free trial</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
