const isBrowser =
    typeof window !== "undefined" && typeof window.localStorage !== "undefined";

const safeParse = (value, fallback = null) => {
    if (typeof value !== "string") return fallback;

    try {
        return JSON.parse(value);
    } catch {
        return fallback;
    }
};

export function getLocalStorageItem(key, fallback = null) {
    if (!isBrowser) return fallback;
    const raw = window.localStorage.getItem(key);
    return safeParse(raw, fallback);
}

export function setLocalStorageItem(key, value) {
    if (!isBrowser) return;
    window.localStorage.setItem(key, JSON.stringify(value));
}

export function removeLocalStorageItem(key) {
    if (!isBrowser) return;
    window.localStorage.removeItem(key);
}
