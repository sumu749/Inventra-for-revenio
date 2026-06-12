"use client";

const features = [
    {
        title: "Unified Product Dashboard",
        description:
            "Track inventory, orders, and performance from one beautiful dashboard built for fast decision-making.",
        accent: "bg-blue-500/10 text-blue-300",
    },
    {
        title: "Secure Authentication",
        description:
            "Login with email/password or Google and keep user sessions safe with Firebase auth.",
        accent: "bg-emerald-500/10 text-emerald-300",
    },
    {
        title: "Responsive Experience",
        description:
            "Your app adapts flawlessly across desktop, tablet, and mobile devices with Tailwind-powered layout.",
        accent: "bg-violet-500/10 text-violet-300",
    },
    {
        title: "Fast Launch",
        description:
            "Minimal setup and starter components help you ship product features faster with higher quality.",
        accent: "bg-orange-500/10 text-orange-300",
    },
    {
        title: "Modern SaaS Design",
        description:
            "A polished interface with card-based layouts, subtle textures, and intuitive controls.",
        accent: "bg-sky-500/10 text-sky-300",
    },
    {
        title: "Scale-ready Architecture",
        description:
            "Built on Next.js with scalable routing and Firebase for reliable authentication and data sync.",
        accent: "bg-rose-500/10 text-rose-300",
    },
];

function FeatureCard({ title, description, accent }) {
    return (
        <div className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.8)] transition hover:-translate-y-1 hover:border-blue-500/30 hover:bg-slate-900/95">
            <div
                className={`mb-5 inline-flex rounded-2xl px-3 py-2 text-sm font-semibold ${accent}`}
            >
                {title}
            </div>
            <p className="text-slate-400 leading-7">{description}</p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-blue-300">
                <span>Explore</span>
                <span className="inline-block transform transition-transform group-hover:translate-x-1">
                    →
                </span>
            </div>
        </div>
    );
}

export default function Features() {
    return (
        <section className="pt-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-12 max-w-3xl">
                    <p className="mb-3 inline-flex rounded-full bg-blue-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                        Core capabilities
                    </p>
                    <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Features built for growing SaaS products.
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-slate-400">
                        Inventra combines polished UI, modern auth, and
                        responsive workflows so your product launch feels
                        premium from day one.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}
