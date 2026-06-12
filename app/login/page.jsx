"use client";

import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid w-full gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-sm sm:grid-cols-[1.4fr_1fr]">
                    <div className="space-y-6">
                        <span className="inline-flex rounded-full bg-blue-600/15 px-4 py-2 text-sm font-semibold text-blue-200">
                            Welcome back
                        </span>
                        <div>
                            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                Sign in to Inventra
                            </h1>
                            <p className="mt-4 max-w-xl text-slate-300">
                                Access your inventory dashboard and manage
                                products, categories, and orders with a sleek,
                                modern experience.
                            </p>
                        </div>

                        <div className="rounded-[1.5rem] bg-slate-900/80 p-6 text-slate-300 shadow-inner shadow-slate-950/50">
                            <h2 className="mb-3 text-sm font-semibold text-slate-100">
                                Why sign in?
                            </h2>
                            <ul className="space-y-2 text-sm leading-6">
                                <li>• Create and manage product listings.</li>
                                <li>
                                    • Use Google auth for fast secure access.
                                </li>
                                <li>
                                    • Keep your store data synced in real time.
                                </li>
                            </ul>
                        </div>

                        <p className="text-sm text-slate-400">
                            Don’t have an account?{" "}
                            <Link
                                href="/register"
                                className="font-medium text-blue-400 hover:text-blue-300"
                            >
                                Create one now.
                            </Link>
                        </p>
                    </div>

                    <div className="rounded-[1.75rem] bg-slate-950/95 p-8 shadow-2xl shadow-black/20 ring-1 ring-slate-800">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
