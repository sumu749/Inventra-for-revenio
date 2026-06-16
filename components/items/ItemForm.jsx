"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import useItems from "@/hooks/useItems";

const CATEGORY_OPTIONS = [
    "Lighting",
    "Furniture",
    "Decor",
    "Textiles",
    "General",
];

const createItemId = () => {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return `item-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

const inputClass =
    "w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 shadow-sm transition duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20";

export default function ItemForm() {
    const router = useRouter();
    const { addItem } = useItems();
    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [fullDescription, setFullDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState(CATEGORY_OPTIONS[0]);
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const categoryOptions = useMemo(
        () => [...new Set([category, ...CATEGORY_OPTIONS])],
        [category],
    );

    const validate = () => {
        if (!title.trim()) {
            return "Title is required.";
        }

        if (!shortDescription.trim()) {
            return "Short description is required.";
        }

        if (!fullDescription.trim()) {
            return "Full description is required.";
        }

        const numericPrice = Number(price);
        if (!price.toString().trim() || Number.isNaN(numericPrice)) {
            return "Price must be a valid number.";
        }

        if (numericPrice <= 0) {
            return "Price must be greater than zero.";
        }

        if (!category.trim()) {
            return "Category is required.";
        }

        if (image.trim()) {
            try {
                new URL(image.trim());
            } catch {
                return "Image URL must be valid or left empty.";
            }
        }

        return null;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        const validationError = validate();

        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);

        try {
            const newItem = {
                id: createItemId(),
                title: title.trim(),
                shortDescription: shortDescription.trim(),
                fullDescription: fullDescription.trim(),
                price: Number(price),
                category: category.trim(),
                image: image.trim(),
                createdAt: new Date().toISOString(),
            };

            addItem(newItem);
            setSuccess(
                "Item created successfully. Redirecting to manage page...",
            );
            setTimeout(() => {
                router.push("/items/manage");
            }, 1200);
        } catch (err) {
            setError(err.message || "Unable to save item. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/30">
            <div>
                <h2 className="text-3xl font-semibold text-white">
                    Create a new item
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                    Add an item to your inventory and save it locally for later
                    management.
                </p>
            </div>

            {error && (
                <div className="rounded-3xl border border-red-700/50 bg-red-900/10 p-4 text-sm text-red-200">
                    {error}
                </div>
            )}

            {success && (
                <div className="rounded-3xl border border-emerald-700/50 bg-emerald-900/10 p-4 text-sm text-emerald-200">
                    {success}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">
                            Title
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            disabled={loading}
                            className={inputClass}
                            placeholder="Aurora Desk Lamp"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">
                            Category
                        </label>
                        <select
                            value={category}
                            onChange={(event) =>
                                setCategory(event.target.value)
                            }
                            disabled={loading}
                            className={inputClass}
                        >
                            {categoryOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                        Short description
                    </label>
                    <input
                        type="text"
                        value={shortDescription}
                        onChange={(event) =>
                            setShortDescription(event.target.value)
                        }
                        disabled={loading}
                        className={inputClass}
                        placeholder="Warm ambient light for home offices..."
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                        Full description
                    </label>
                    <textarea
                        value={fullDescription}
                        onChange={(event) =>
                            setFullDescription(event.target.value)
                        }
                        disabled={loading}
                        className={`${inputClass} min-h-[150px] resize-none`}
                        placeholder="A modern desk lamp with adjustable brightness, soft warm tones..."
                    />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">
                            Price
                        </label>
                        <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                            disabled={loading}
                            className={inputClass}
                            placeholder="79.99"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">
                            Image URL (optional)
                        </label>
                        <input
                            type="url"
                            value={image}
                            onChange={(event) => setImage(event.target.value)}
                            disabled={loading}
                            className={inputClass}
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition duration-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {loading ? "Saving item..." : "Save item"}
                </button>
            </form>
        </div>
    );
}
