"use client";

import Link from "next/link";

const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export default function ManageItemCard({ item, onDelete }) {
    return (
        <article className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/20 transition hover:border-blue-400/30">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">
                            {item.category}
                        </span>
                        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
                            {currencyFormatter.format(item.price)}
                        </span>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                            {item.shortDescription}
                        </p>
                    </div>
                </div>
                <div className="space-y-3 text-right sm:text-left">
                    <p className="text-sm text-slate-500">
                        Added {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-slate-500">ID: {item.id}</p>
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="grid gap-3 sm:grid-cols-2">
                    <Link
                        href={`/items/${item.id}`}
                        className="inline-flex items-center justify-center rounded-3xl bg-slate-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                        View details
                    </Link>
                    <button
                        type="button"
                        onClick={() => onDelete(item)}
                        className="inline-flex items-center justify-center rounded-3xl border border-red-600/40 bg-red-600/10 px-4 py-3 text-sm font-semibold text-red-200 transition hover:bg-red-600/20 hover:text-white"
                    >
                        Delete
                    </button>
                </div>
                <p className="text-sm text-slate-400 sm:max-w-md">
                    {item.fullDescription.length > 120
                        ? `${item.fullDescription.slice(0, 120)}...`
                        : item.fullDescription}
                </p>
            </div>
        </article>
    );
}
