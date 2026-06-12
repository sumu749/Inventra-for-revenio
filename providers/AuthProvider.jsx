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
            setError(err.message);
            throw err;
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
            setError(err.message);
            throw err;
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
            setError(err.message);
            throw err;
        }
    };

    // Logout
    const logout = async () => {
        try {
            setError(null);
            await signOut(auth);
            setUser(null);
        } catch (err) {
            setError(err.message);
            throw err;
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
