"use client";

import Link from "next/link";
import { useMemo } from "react";
import useItems from "@/hooks/useItems";
import ItemCard from "@/components/items/ItemCard";

const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export default function ItemDetailsPage({ params }) {
    const { items } = useItems();
    const { id } = params;

    const item = useMemo(() => items.find((i) => i.id === id), [items, id]);

    const relatedItems = useMemo(() => {
        if (!item) return [];
        return items
            .filter((i) => i.category === item.category && i.id !== item.id)
            .slice(0, 3);
    }, [items, item]);

    if (!item) {
        return (
            <main className="bg-slate-950 text-white min-h-screen px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xl font-semibold text-slate-300">
                        Item not found
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                        The item you're looking for doesn't exist.
                    </p>
                    <Link
                        href="/items"
                        className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                    >
                        Back to items
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-slate-950 text-white min-h-screen px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                {/* Back Button */}
                <Link
                    href="/items"
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white"
                >
                    <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                    Back to Items
                </Link>

                {/* Item Details */}
                <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
                    {/* Image Section */}
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
                        {item.image ? (
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <div className="flex h-96 w-full items-center justify-center text-8xl text-slate-700">
                                {item.title.charAt(0)}
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col gap-6">
                        {/* Category & Price */}
                        <div>
                            <span className="inline-flex rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
                                {item.category}
                            </span>
                        </div>

                        {/* Title */}
                        <div>
                            <h1 className="text-5xl font-bold tracking-tight text-white">
                                {item.title}
                            </h1>
                        </div>

                        {/* Price */}
                        <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                                Price
                            </p>
                            <p className="mt-2 text-4xl font-bold text-blue-400">
                                {currencyFormatter.format(item.price)}
                            </p>
                        </div>

                        {/* Full Description */}
                        <div>
                            <h2 className="text-lg font-semibold text-slate-200">
                                Description
                            </h2>
                            <p className="mt-3 leading-7 text-slate-300">
                                {item.fullDescription}
                            </p>
                        </div>

                        {/* Additional Info */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                                    Added
                                </p>
                                <p className="mt-2 text-sm font-semibold text-white">
                                    {new Date(
                                        item.createdAt,
                                    ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                                    Item ID
                                </p>
                                <p className="mt-2 text-sm font-mono font-semibold text-blue-300">
                                    {item.id}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Items */}
                {relatedItems.length > 0 && (
                    <div className="mt-16">
                        <div className="mb-8">
                            <p className="text-sm uppercase tracking-[0.28em] text-blue-300">
                                Similar Items
                            </p>
                            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                                Other {item.category} Items
                            </h2>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {relatedItems.map((relatedItem) => (
                                <ItemCard
                                    key={relatedItem.id}
                                    item={relatedItem}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
