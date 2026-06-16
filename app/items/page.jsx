"use client";

import { useMemo, useState } from "react";
import useItems from "@/hooks/useItems";
import SearchBar from "@/components/items/SearchBar";
import FilterPanel from "@/components/items/FilterPanel";
import ItemGrid from "@/components/items/ItemGrid";

const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export default function ItemsPage() {
    const { items } = useItems();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [priceRange, setPriceRange] = useState([0, 500]);

    const filteredItems = useMemo(() => {
        return items.filter((item) => {
            const matchesSearch =
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.shortDescription
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());

            const matchesCategory =
                selectedCategory === "" || item.category === selectedCategory;

            const matchesPrice =
                item.price >= priceRange[0] && item.price <= priceRange[1];

            return matchesSearch && matchesCategory && matchesPrice;
        });
    }, [items, searchQuery, selectedCategory, priceRange]);

    const sortedItems = useMemo(
        () =>
            [...filteredItems].sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
            ),
        [filteredItems],
    );

    return (
        <main className="bg-slate-950 text-white min-h-screen px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <p className="text-sm uppercase tracking-[0.28em] text-blue-300">
                        Browse
                    </p>
                    <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
                        Items Catalog
                    </h1>
                    <p className="mt-4 max-w-2xl text-slate-400">
                        Search and filter through {items.length} items in our
                        inventory. All changes persist locally.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
                    <div className="space-y-6">
                        <SearchBar
                            value={searchQuery}
                            onChange={setSearchQuery}
                            placeholder="Search by title or description..."
                        />

                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            <ItemGrid
                                items={sortedItems}
                                isEmpty={sortedItems.length === 0}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="sticky top-20">
                            <FilterPanel
                                items={items}
                                selectedCategory={selectedCategory}
                                onCategoryChange={setSelectedCategory}
                                priceRange={priceRange}
                                onPriceRangeChange={setPriceRange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
