"use client";

import { useMemo } from "react";

export default function FilterPanel({
    items,
    selectedCategory,
    onCategoryChange,
    priceRange,
    onPriceRangeChange,
}) {
    const categories = useMemo(() => {
        const cats = new Set(items.map((item) => item.category));
        return Array.from(cats).sort();
    }, [items]);

    const priceStats = useMemo(() => {
        if (items.length === 0) return { min: 0, max: 0 };
        const prices = items.map((item) => item.price);
        return {
            min: Math.floor(Math.min(...prices)),
            max: Math.ceil(Math.max(...prices)),
        };
    }, [items]);

    return (
        <div className="flex flex-col gap-6 rounded-2xl border border-slate-700 bg-slate-900/50 p-5">
            <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
                    Category
                </h3>
                <div className="mt-4 space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="radio"
                            name="category"
                            value=""
                            checked={selectedCategory === ""}
                            onChange={(e) => onCategoryChange(e.target.value)}
                            className="h-4 w-4 rounded border-slate-500 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-slate-300">All</span>
                    </label>
                    {categories.map((cat) => (
                        <label
                            key={cat}
                            className="flex items-center gap-3 cursor-pointer"
                        >
                            <input
                                type="radio"
                                name="category"
                                value={cat}
                                checked={selectedCategory === cat}
                                onChange={(e) =>
                                    onCategoryChange(e.target.value)
                                }
                                className="h-4 w-4 rounded border-slate-500 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-slate-300">
                                {cat}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="border-t border-slate-700" />

            <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
                    Price Range
                </h3>
                <div className="mt-4 space-y-4">
                    <div>
                        <label className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                            Min: ${priceRange[0]}
                        </label>
                        <input
                            type="range"
                            min={priceStats.min}
                            max={priceStats.max}
                            value={priceRange[0]}
                            onChange={(e) =>
                                onPriceRangeChange([
                                    parseInt(e.target.value),
                                    priceRange[1],
                                ])
                            }
                            className="mt-2 w-full"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                            Max: ${priceRange[1]}
                        </label>
                        <input
                            type="range"
                            min={priceStats.min}
                            max={priceStats.max}
                            value={priceRange[1]}
                            onChange={(e) =>
                                onPriceRangeChange([
                                    priceRange[0],
                                    parseInt(e.target.value),
                                ])
                            }
                            className="mt-2 w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
