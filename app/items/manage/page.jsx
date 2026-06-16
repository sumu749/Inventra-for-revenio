"use client";

import Link from "next/link";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import ManageItemCard from "@/components/items/ManageItemCard";
import useItems from "@/hooks/useItems";

export default function ManageItemsPage() {
    const { items, removeItem } = useItems();

    const handleDelete = (item) => {
        const confirmed = window.confirm(
            `Delete ${item.title}? This action cannot be undone.`,
        );
        if (confirmed) {
            removeItem(item.id);
        }
    };

    return (
        <ProtectedRoute>
            <main className="bg-slate-950 text-white min-h-screen px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl space-y-8">
                    <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-black/30">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.28em] text-blue-300">
                                    Protected page
                                </p>
                                <h1 className="text-4xl font-semibold text-white">
                                    Manage Items
                                </h1>
                                <p className="mt-2 text-slate-400">
                                    Review items that are saved locally, remove
                                    entries, or add new ones.
                                </p>
                            </div>
                            <Link
                                href="/items"
                                className="inline-flex rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-700"
                            >
                                Back to items
                            </Link>
                        </div>
                    </div>

                    <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-black/30">
                        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.28em] text-blue-300">
                                    Inventory overview
                                </p>
                                <h2 className="text-3xl font-semibold text-white">
                                    All items ({items.length})
                                </h2>
                            </div>
                            <Link
                                href="/items/add"
                                className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                            >
                                Add new item
                            </Link>
                        </div>

                        {items.length === 0 ? (
                            <div className="rounded-[1.5rem] border border-dashed border-slate-700 bg-slate-950/80 p-12 text-center text-slate-400">
                                <p className="text-xl font-semibold text-white">
                                    No items found
                                </p>
                                <p className="mt-3 text-sm leading-6">
                                    Your inventory is empty. Use the button
                                    above to add your first item.
                                </p>
                            </div>
                        ) : (
                            <div className="grid gap-6">
                                {items.map((item) => (
                                    <ManageItemCard
                                        key={item.id}
                                        item={item}
                                        onDelete={handleDelete}
                                    />
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </ProtectedRoute>
    );
}
