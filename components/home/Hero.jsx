"use client";

export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                            Beautiful UI, built for developers
                        </h1>
                        <p className="text-slate-300 mb-6 max-w-xl">
                            Revenio is a minimal Next.js starter with Tailwind
                            CSS and Firebase authentication. Ship fast with
                            sensible defaults and clean components.
                        </p>

                        <div className="flex gap-3 flex-wrap">
                            <a
                                href="/register"
                                className="inline-block px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded font-medium"
                            >
                                Get started
                            </a>
                            <a
                                href="/about"
                                className="inline-block px-5 py-3 border border-slate-700 rounded text-slate-200 hover:bg-slate-800"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>

                    <div className="order-first lg:order-last">
                        <div className="w-full h-56 sm:h-72 md:h-80 lg:h-64 bg-slate-800 border border-slate-700 rounded shadow-inner flex items-center justify-center">
                            <span className="text-slate-400">
                                [Hero illustration]
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
