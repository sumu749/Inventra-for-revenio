"use client";

function ProductCard({ title, price, badge }) {
    return (
        <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-900/50 overflow-hidden shadow-[0_20px_60px_-20px_rgba(15,23,42,0.6)] transition hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_40px_100px_-30px_rgba(59,130,246,0.3)]">
            {badge && (
                <div className="absolute top-4 right-4 z-10 inline-flex rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {badge}
                </div>
            )}
            <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden flex items-center justify-center">
                <div className="text-6xl text-slate-700 font-light">
                    {title.charAt(0)}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-6">
                <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition">
                    {title}
                </h4>
                <p className="text-sm text-slate-400 mt-2">
                    Premium quality item perfect for modern spaces.
                </p>

                <div className="mt-6 flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                        {price}
                    </span>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold text-white transition shadow-lg hover:shadow-blue-600/50">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function PopularProducts() {
    const products = [
        { title: "Minimal Chair", price: "$129", badge: "Best Seller" },
        { title: "Nordic Lamp", price: "$59", badge: null },
        { title: "Oak Table", price: "$349", badge: "Premium" },
        { title: "Cozy Rug", price: "$89", badge: null },
    ];

    return (
        <section className="py-20 bg-slate-950">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 inline-flex rounded-full bg-blue-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                        Curated selections
                    </p>
                    <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Popular Products
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-slate-400">
                        Discover our most loved items. Each product is carefully
                        selected for quality, design, and value.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((p) => (
                        <ProductCard key={p.title} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
