"use client";

import { useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/lib/firebase.config";
import { AuthContext } from "@/context/AuthContext";

const googleProvider = new GoogleAuthProvider();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Listen to auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser || null);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    // Register with email/password
    const register = async (email, password) => {
        try {
            setError(null);
            const result = await createUserWithEmailAndPassword(
                auth,
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

    // Login with email/password
    const login = async (email, password) => {
        try {
            setError(null);
            const result = await signInWithEmailAndPassword(
                auth,
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

    // Login with Google
    const loginWithGoogle = async () => {
        try {
            setError(null);
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user);
            return result.user;
        } catch (err) {
            const message = normalizeAuthError(err);
            setError(message);
            throw new Error(message);
        }
    };

    // Logout
    const logout = async () => {
        try {
            setError(null);
            await signOut(auth);
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
