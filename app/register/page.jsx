"use client";

import Link from "next/link";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid w-full gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-sm sm:grid-cols-[1.4fr_1fr]">
                    <div className="space-y-6">
                        <span className="inline-flex rounded-full bg-emerald-600/15 px-4 py-2 text-sm font-semibold text-emerald-200">
                            Start selling
                        </span>
                        <div>
                            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                Create your Inventra account
                            </h1>
                            <p className="mt-4 max-w-xl text-slate-300">
                                Join Inventra to organize products, share
                                listings, and manage your online inventory from
                                one beautiful dashboard.
                            </p>
                        </div>

                        <div className="rounded-[1.5rem] bg-slate-900/80 p-6 text-slate-300 shadow-inner shadow-slate-950/50">
                            <h2 className="mb-3 text-sm font-semibold text-slate-100">
                                What you get
                            </h2>
                            <ul className="space-y-2 text-sm leading-6">
                                <li>
                                    • Fast product creation and stock tracking.
                                </li>
                                <li>
                                    • Built-in authentication with Firebase.
                                </li>
                                <li>
                                    • Product management tools for every store.
                                </li>
                            </ul>
                        </div>

                        <p className="text-sm text-slate-400">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="font-medium text-blue-400 hover:text-blue-300"
                            >
                                Log in here.
                            </Link>
                        </p>
                    </div>

                    <div className="rounded-[1.75rem] bg-slate-950/95 p-8 shadow-2xl shadow-black/20 ring-1 ring-slate-800">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
