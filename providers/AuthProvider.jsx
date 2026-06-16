"use client";

import { useState, useEffect } from "react";
import { getFirebaseAuth } from "@/lib/firebase.config";
import { AuthContext } from "@/context/AuthContext";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        let active = true;

        async function initAuth() {
            const authClient = await getFirebaseAuth();
            if (active) {
                setAuth(authClient);
            }
        }

        initAuth();

        return () => {
            active = false;
        };
    }, []);

    useEffect(() => {
        if (!auth) return;

        let unsubscribe = null;

        import("firebase/auth").then(({ onAuthStateChanged }) => {
            unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser || null);
                setLoading(false);
            });
        });

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [auth]);

    const register = async (email, password) => {
        try {
            setError(null);
            const authClient = auth || (await getFirebaseAuth());
            const { createUserWithEmailAndPassword } =
                await import("firebase/auth");
            const result = await createUserWithEmailAndPassword(
                authClient,
                email,
                password,
            );
            setUser(result.user);
            return result.user;
        } catch (err) {
            const message = normalizeAuthError(err);
            setError(message);
            throw new Error(message);
        }
    };

    const login = async (email, password) => {
        try {
            setError(null);
            const authClient = auth || (await getFirebaseAuth());
            const { signInWithEmailAndPassword } =
                await import("firebase/auth");
            const result = await signInWithEmailAndPassword(
                authClient,
                email,
                password,
            );
            setUser(result.user);
            return result.user;
        } catch (err) {
            const message = normalizeAuthError(err);
            setError(message);
            throw new Error(message);
        }
    };

    const loginWithGoogle = async () => {
        try {
            setError(null);
            const authClient = auth || (await getFirebaseAuth());
            const { signInWithPopup, GoogleAuthProvider } =
                await import("firebase/auth");
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(authClient, provider);
            setUser(result.user);
            return result.user;
        } catch (err) {
            const message = normalizeAuthError(err);
            setError(message);
            throw new Error(message);
        }
    };

    const logout = async () => {
        try {
            setError(null);
            const authClient = auth || (await getFirebaseAuth());
            const { signOut } = await import("firebase/auth");
            await signOut(authClient);
            setUser(null);
        } catch (err) {
            const message = normalizeAuthError(err);
            setError(message);
            throw new Error(message);
        }
    };

    const normalizeAuthError = (err) => {
        const code = err?.code || "";
        const message = err?.message || String(err);

        switch (code) {
            case "auth/email-already-in-use":
                return "This email is already in use. Try logging in or use another email.";
            case "auth/invalid-email":
                return "Please enter a valid email address.";
            case "auth/operation-not-allowed":
                return "This authentication method is not enabled.";
            case "auth/weak-password":
                return "Use a stronger password with at least 6 characters.";
            case "auth/user-not-found":
                return "No account found with that email. Please register first.";
            case "auth/wrong-password":
                return "The password is incorrect. Please try again.";
            case "auth/popup-closed-by-user":
                return "Google login was canceled. Please try again if you want to sign in with Google.";
            case "auth/cancelled-popup-request":
                return "Google login was interrupted. Please try again.";
            case "auth/popup-blocked":
                return "Google login popup was blocked. Allow popups or use email sign-in.";
            case "auth/network-request-failed":
                return "Network error. Check your connection and try again.";
            default:
                return message;
        }
    };

    const value = {
        user,
        loading,
        error,
        register,
        login,
        loginWithGoogle,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
