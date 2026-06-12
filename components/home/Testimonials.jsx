"use client";

function Testimonial({ quote, author }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded p-6 h-full flex flex-col">
            <p className="text-slate-300 flex-1">“{quote}”</p>
            <div className="mt-4 text-sm text-slate-400">— {author}</div>
        </div>
    );
}

export default function Testimonials() {
    const items = [
        { quote: "A joy to build with and extend.", author: "Alex P." },
        { quote: "Fast to prototype and ship features.", author: "Sam R." },
        { quote: "Beautiful defaults and clean layout.", author: "Jordan L." },
    ];

    return (
        <section className="py-16 bg-slate-950">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-white mb-6">
                    Testimonials
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((t, i) => (
                        <Testimonial key={i} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
