"use client";

export default function Categories() {
    const cats = ["Furniture", "Lighting", "Decor", "Textiles"];

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-white mb-6">
                    Categories
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {cats.map((c) => (
                        <div
                            key={c}
                            className="bg-slate-900 border border-slate-800 rounded p-5 flex items-center justify-center h-28"
                        >
                            <span className="text-slate-200 font-medium">
                                {c}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
