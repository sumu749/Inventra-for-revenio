"use client";

import { useMemo, useState } from "react";
import useItems from "@/hooks/useItems";

const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export default function ItemsPage() {
    const { items, addItem, removeItem } = useItems();
    const [saving, setSaving] = useState(false);

    const sortedItems = useMemo(
        () =>
            [...items].sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
            ),
        [items],
    );

    const handleAddExample = async () => {
        setSaving(true);
        addItem({
            id: `prod-${Date.now()}`,
            title: "Local Storage Sample Item",
            shortDescription:
                "This item was added locally and persists after refresh.",
            fullDescription:
                "Items added through the local state hook are saved into localStorage, then merged with seed data on reload.",
            category: "Local",
            price: 49.99,
            image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
            createdAt: new Date().toISOString(),
        });
        setSaving(false);
    };

    return (
        <main className="bg-slate-950 text-white min-h-screen px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-blue-300">
                            Local Product Layer
                        </p>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
                            Items from seed data + localStorage
                        </h1>
                        <p className="mt-4 max-w-2xl text-slate-400">
                            Items merge seed data with localStorage entries so
                            local changes stay visible after refresh.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-3xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60"
                        disabled={saving}
                        onClick={handleAddExample}
                    >
                        {saving ? "Saving..." : "Add sample local item"}
                    </button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {sortedItems.map((item) => (
                        <article
                            key={item.id}
                            className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-xl shadow-black/20"
                        >
                            <div className="relative h-52 bg-slate-800">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center text-6xl text-slate-600">
                                        {item.title.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                                        {item.category}
                                    </span>
                                    <span className="text-lg font-semibold text-blue-300">
                                        {currencyFormatter.format(item.price)}
                                    </span>
                                </div>
                                <h2 className="mt-5 text-2xl font-semibold text-white">
                                    {item.title}
                                </h2>
                                <p className="mt-3 text-sm leading-6 text-slate-400">
                                    {item.shortDescription}
                                </p>
                                <p className="mt-4 text-sm leading-6 text-slate-300">
                                    {item.fullDescription}
                                </p>
                                <div className="mt-6 flex items-center justify-between gap-3">
                                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                                        Added:{" "}
                                        {new Date(
                                            item.createdAt,
                                        ).toLocaleDateString()}
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => removeItem(item.id)}
                                        className="rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
