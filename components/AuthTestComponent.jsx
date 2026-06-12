"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export function AuthTestComponent() {
    const { user, loading, error, login, logout, loginWithGoogle } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggingIn, setLoggingIn] = useState(false);

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please enter email and password");
            return;
        }
        try {
            setLoggingIn(true);
            await login(email, password);
            setEmail("");
            setPassword("");
        } catch (err) {
            console.error("Login failed:", err);
        } finally {
            setLoggingIn(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            setLoggingIn(true);
            await loginWithGoogle();
        } catch (err) {
            console.error("Google login failed:", err);
        } finally {
            setLoggingIn(false);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center gap-2 p-4 bg-blue-900/20 border border-blue-700 rounded">
                <span className="text-blue-400">⟳</span>
                <span className="text-blue-300">Loading authentication...</span>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {/* User Status */}
            {user ? (
                <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 p-3 bg-green-900/20 border border-green-700 rounded">
                        <span className="text-green-400">✓</span>
                        <span className="text-green-300">Logged in</span>
                    </div>
                    <div className="p-4 bg-slate-900 border border-slate-700 rounded">
                        <p className="text-sm text-slate-400">Email:</p>
                        <p className="text-white font-mono">{user.email}</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded font-medium transition"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 p-3 bg-slate-800 border border-slate-700 rounded">
                        <span className="text-slate-400">○</span>
                        <span className="text-slate-300">Not logged in</span>
                    </div>

                    {/* Email/Password Login Form */}
                    <form onSubmit={handleEmailLogin} className="space-y-2">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loggingIn}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded text-white placeholder-slate-500 disabled:opacity-50"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={loggingIn}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded text-white placeholder-slate-500 disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={loggingIn}
                            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium disabled:opacity-50 transition"
                        >
                            {loggingIn ? "Logging in..." : "Login with Email"}
                        </button>
                    </form>

                    {/* Google Login */}
                    <button
                        onClick={handleGoogleLogin}
                        disabled={loggingIn}
                        className="w-full px-4 py-2 bg-white hover:bg-gray-100 text-slate-900 rounded font-medium disabled:opacity-50 transition"
                    >
                        {loggingIn ? "Logging in..." : "Login with Google"}
                    </button>
                </div>
            )}

            {/* Error Display */}
            {error && (
                <div className="flex items-start gap-2 p-3 bg-red-900/20 border border-red-700 rounded">
                    <span className="text-red-400 mt-0.5">✗</span>
                    <span className="text-red-300 text-sm">{error}</span>
                </div>
            )}
        </div>
    );
}
