"use client";

import { useCallback, useEffect, useState } from "react";
import { seedProducts } from "@/data/products";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage";

const STORAGE_KEY = "revenio-items";

const normalizeItem = (item) => ({
    id: String(item?.id || ""),
    title: String(item?.title || "Untitled Item"),
    shortDescription: String(item?.shortDescription || ""),
    fullDescription: String(item?.fullDescription || ""),
    category: String(item?.category || "General"),
    price: Number(item?.price || 0),
    image: String(item?.image || ""),
    createdAt: String(item?.createdAt || new Date().toISOString()),
});

const mergeItems = (seedList, storedList) => {
    const merged = new Map();
    seedList.concat(storedList || []).forEach((item) => {
        const normalized = normalizeItem(item);
        if (!normalized.id) {
            return;
        }
        merged.set(normalized.id, normalized);
    });
    return Array.from(merged.values());
};

export default function useItems() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedItems = getLocalStorageItem(STORAGE_KEY, []);
        setItems(
            mergeItems(
                seedProducts,
                Array.isArray(storedItems) ? storedItems : [],
            ),
        );
        setLoading(false);
    }, []);

    const saveItems = useCallback(
        (nextItems) => {
            setItems(nextItems);
            setLocalStorageItem(STORAGE_KEY, nextItems);
        },
        [setItems],
    );

    const addItem = useCallback(
        (item) => {
            const nextItems = mergeItems(items, [item]);
            saveItems(nextItems);
            return nextItems;
        },
        [items, saveItems],
    );

    const updateItem = useCallback(
        (id, changes) => {
            const nextItems = items.map((item) =>
                item.id === id ? normalizeItem({ ...item, ...changes }) : item,
            );
            saveItems(nextItems);
            return nextItems;
        },
        [items, saveItems],
    );

    const removeItem = useCallback(
        (id) => {
            const nextItems = items.filter((item) => item.id !== id);
            saveItems(nextItems);
            return nextItems;
        },
        [items, saveItems],
    );

    return {
        items,
        loading,
        setItems: saveItems,
        addItem,
        updateItem,
        removeItem,
    };
}
