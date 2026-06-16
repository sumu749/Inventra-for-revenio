"use client";

import Link from "next/link";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function ManageItemsPage() {
    return (
        <ProtectedRoute>
            <main className="bg-slate-950 text-white min-h-screen px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-black/30">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.28em] text-blue-300">
                                    Protected page
                                </p>
                                <h1 className="text-4xl font-semibold text-white">
                                    Manage Items
                                </h1>
                            </div>
                            <Link
                                href="/items"
                                className="inline-flex rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-700"
                            >
                                Back to items
                            </Link>
                        </div>

                        <p className="max-w-2xl text-slate-400">
                            Only authenticated users can manage inventory. If
                            you are not signed in, you will be redirected to the
                            login page and returned here after authentication.
                        </p>
                    </div>
                </div>
            </main>
        </ProtectedRoute>
    );
}
