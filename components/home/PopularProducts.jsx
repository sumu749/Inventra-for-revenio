"use client";

function ProductCard({ title, price }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded p-4 h-full flex flex-col">
            <div className="h-40 bg-slate-800 rounded mb-4 flex items-center justify-center">
                Image
            </div>
            <h4 className="font-semibold">{title}</h4>
            <div className="mt-auto flex items-center justify-between">
                <span className="text-slate-300 font-medium">{price}</span>
                <button className="px-3 py-1 bg-blue-600 rounded text-sm">
                    Buy
                </button>
            </div>
        </div>
    );
}

export default function PopularProducts() {
    const products = [
        { title: "Minimal Chair", price: "$129" },
        { title: "Nordic Lamp", price: "$59" },
        { title: "Oak Table", price: "$349" },
        { title: "Cozy Rug", price: "$89" },
    ];

    return (
        <section className="py-16 bg-slate-950">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-white mb-6">
                    Popular Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((p) => (
                        <ProductCard key={p.title} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
