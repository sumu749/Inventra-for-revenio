import { useEffect, useState } from "react";
import { getFirebaseApp } from "@/lib/firebase.config";

export function useFirebaseInitialization() {
    const [isInitialized, setIsInitialized] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            const app = getFirebaseApp();
            if (app) {
                console.log("Firebase initialized successfully");
                console.log("Project ID:", app.options.projectId);
                setIsInitialized(true);
            }
        } catch (err) {
            console.error("Firebase initialization failed:", err);
            setError(err.message);
        }
    }, []);

    return { isInitialized, error };
}
