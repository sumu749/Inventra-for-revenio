"use client";

const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export default function ItemCard({ item, onRemove }) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-lg shadow-black/20 transition hover:border-blue-400/40 hover:shadow-blue-500/10">
            <div className="relative h-48 overflow-hidden bg-slate-800">
                {item.image ? (
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-6xl text-slate-600">
                        {item.title.charAt(0)}
                    </div>
                )}
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
            </div>

            <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex rounded-full bg-blue-600/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
                        {item.category}
                    </span>
                    <span className="text-lg font-bold text-blue-400">
                        {currencyFormatter.format(item.price)}
                    </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white line-clamp-2">
                    {item.title}
                </h3>
                <p className="mt-2 text-sm leading-5 text-slate-400 line-clamp-2">
                    {item.shortDescription}
                </p>

                <div className="mt-4 flex items-center justify-between gap-2 pt-4 border-t border-white/5">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                        {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                    {onRemove && (
                        <button
                            type="button"
                            onClick={() => onRemove(item.id)}
                            className="rounded-lg bg-red-600/20 px-3 py-1.5 text-xs font-semibold text-red-300 transition hover:bg-red-600 hover:text-white"
                        >
                            Remove
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
}
