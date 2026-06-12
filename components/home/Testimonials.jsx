"use client";

function Testimonial({ quote, author, role, rating }) {
    return (
        <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-900/50 p-8 transition hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_40px_100px_-30px_rgba(59,130,246,0.3)]">
            <div className="flex items-center gap-1 mb-4">
                {[...Array(rating)].map((_, i) => (
                    <span key={i} className="text-lg text-yellow-400">
                        ★
                    </span>
                ))}
            </div>

            <p className="text-lg leading-8 text-slate-100 mb-6">"{quote}"</p>

            <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                    {author.charAt(0)}
                </div>
                <div>
                    <p className="font-semibold text-white text-sm group-hover:text-blue-300 transition">
                        {author}
                    </p>
                    <p className="text-xs text-slate-400">{role}</p>
                </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 opacity-0 group-hover:opacity-100 transition-all pointer-events-none" />
        </div>
    );
}

export default function Testimonials() {
    const items = [
        {
            quote: "A joy to build with and extend. The documentation is clear and the components are production-ready.",
            author: "Alex P.",
            role: "Founder, TechStart",
            rating: 5,
        },
        {
            quote: "Fast to prototype and ship features. We launched our MVP in 2 weeks with confidence.",
            author: "Sam R.",
            role: "CTO, BuildCo",
            rating: 5,
        },
        {
            quote: "Beautiful defaults and clean layout. We didn't need to override much, saving us weeks of design work.",
            author: "Jordan L.",
            role: "Product Designer, CreativeHub",
            rating: 5,
        },
    ];

    return (
        <section className="pt-20 bg-slate-950">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 inline-flex rounded-full bg-blue-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                        Trusted by builders
                    </p>
                    <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        What our customers say
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-slate-400">
                        Hear from founders and makers who've used Inventra to
                        build and scale their products faster.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((t, i) => (
                        <Testimonial key={i} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
