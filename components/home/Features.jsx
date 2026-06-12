"use client";

function FeatureCard({ title, children }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded p-6 h-full flex flex-col">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-slate-400 text-sm flex-1">{children}</p>
        </div>
    );
}

export default function Features() {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard title="Fast Setup">
                        Opinionated project structure and tooling so you can
                        start coding immediately.
                    </FeatureCard>
                    <FeatureCard title="Auth Ready">
                        Email/password and Google authentication with Firebase
                        integration.
                    </FeatureCard>
                    <FeatureCard title="Responsive UI">
                        Tailwind-powered components that adapt to any screen
                        size.
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
}
