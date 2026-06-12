"use client";

export default function CTA() {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-2xl font-bold">
                            Ready to get started?
                        </h3>
                        <p className="text-slate-100/90">
                            Create an account and start exploring Revenio today.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <a
                            href="/register"
                            className="px-5 py-3 bg-white text-slate-900 rounded font-medium"
                        >
                            Create account
                        </a>
                        <a
                            href="/about"
                            className="px-5 py-3 border border-white/30 rounded text-white"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
