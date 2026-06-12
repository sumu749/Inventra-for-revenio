"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function RegisterForm() {
    const router = useRouter();
    const { register, loginWithGoogle } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            await register(email, password);
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
        <div className="space-y-6">
            {error && (
                <div className="rounded-3xl border border-red-700/50 bg-red-900/10 p-4 text-sm text-red-200">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                        className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-3xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/10 transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {loading ? "Creating account..." : "Register"}
                </button>
            </form>

            <div className="relative flex items-center gap-3 text-sm text-slate-500">
                <span className="flex-1 h-px bg-slate-800" />
                <span>or continue with</span>
                <span className="flex-1 h-px bg-slate-800" />
            </div>

            <button
                onClick={handleGoogle}
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:border-slate-700 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-900">
                    G
                </span>
                {loading ? "Please wait..." : "Continue with Google"}
            </button>
        </div>
    );
}
