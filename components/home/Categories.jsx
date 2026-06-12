"use client";

function CategoryCard({ name, emoji }) {
    return (
        <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-900/50 p-8 transition hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_40px_100px_-30px_rgba(59,130,246,0.3)]">
            <div className="flex flex-col items-center justify-center text-center h-32">
                <div className="text-5xl mb-4 transition-transform group-hover:scale-110">
                    {emoji}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition">
                    {name}
                </h3>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 opacity-0 group-hover:opacity-100 transition-all pointer-events-none" />
        </div>
    );
}

export default function Categories() {
    const cats = [
        { name: "Furniture", emoji: "🪑" },
        { name: "Lighting", emoji: "💡" },
        { name: "Decor", emoji: "🎨" },
        { name: "Textiles", emoji: "🧵" },
    ];

    return (
        <section className="pt-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 inline-flex rounded-full bg-blue-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                        Browse by type
                    </p>
                    <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Shop by Category
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-slate-400">
                        Explore our curated collections organized by type. Find
                        exactly what you're looking for with ease.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {cats.map((c) => (
                        <CategoryCard key={c.name} {...c} />
                    ))}
                </div>
            </div>
        </section>
    );
}
