"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function LoginForm() {
    const router = useRouter();
    const { login, loginWithGoogle } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            await login(email, password);
            router.push("/");
        } catch (err) {
            setError(err.message || String(err));
        } finally {
            setLoading(false);
        }
    };

    const handleGoogle = async () => {
        setError(null);
        setLoading(true);
        try {
            await loginWithGoogle();
            router.push("/");
        } catch (err) {
            setError(err.message || String(err));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            {error && (
                <div className="p-3 bg-red-900/20 border border-red-700 rounded text-sm text-red-300">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded text-white placeholder-slate-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded text-white placeholder-slate-500"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium disabled:opacity-50"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>

            <div className="flex items-center gap-3">
                <span className="flex-1 h-px bg-slate-800" />
                <span className="text-sm text-slate-500">or</span>
                <span className="flex-1 h-px bg-slate-800" />
            </div>

            <button
                onClick={handleGoogle}
                disabled={loading}
                className="w-full px-4 py-2 bg-white hover:bg-gray-100 text-slate-900 rounded font-medium disabled:opacity-50"
            >
                {loading ? "Please wait..." : "Continue with Google"}
            </button>
        </div>
    );
}
