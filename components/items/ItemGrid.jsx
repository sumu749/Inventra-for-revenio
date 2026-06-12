"use client";

import ItemCard from "@/components/items/ItemCard";

export default function ItemGrid({ items, onRemove, isEmpty }) {
    if (isEmpty) {
        return (
            <div className="col-span-full flex min-h-96 items-center justify-center rounded-2xl border-2 border-dashed border-slate-700 bg-slate-900/50">
                <div className="text-center">
                    <p className="text-lg font-semibold text-slate-300">
                        No items found
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                        Try adjusting your search or filters
                    </p>
                </div>
            </div>
        );
    }

    return items.map((item) => (
        <ItemCard key={item.id} item={item} onRemove={onRemove} />
    ));
}
