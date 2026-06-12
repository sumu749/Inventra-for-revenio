"use client";

import { useFirebaseInitialization } from "@/hooks/useFirebaseInitialization";
import { AuthTestComponent } from "@/components/AuthTestComponent";

export default function HomePage() {
    const { isInitialized, error } = useFirebaseInitialization();

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white p-4">
            <div className="w-full max-w-md space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-4xl font-bold">Welcome to Revenio</h1>
                    <p className="text-lg text-slate-300">
                        Next.js App Router starter project with Tailwind CSS.
                    </p>
                </div>

                <div className="border-t border-slate-700 pt-6">
                    <h2 className="text-sm font-semibold mb-3 text-slate-400 text-center">
                        Firebase Status
                    </h2>
                    {isInitialized && !error ? (
                        <div className="flex items-center justify-center gap-2 p-3 bg-green-900/20 border border-green-700 rounded">
                            <span className="text-green-400">✓</span>
                            <span className="text-green-300">
                                Firebase configured successfully
                            </span>
                        </div>
                    ) : error ? (
                        <div className="flex items-center justify-center gap-2 p-3 bg-red-900/20 border border-red-700 rounded">
                            <span className="text-red-400">✗</span>
                            <span className="text-red-300">{error}</span>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center gap-2 p-3 bg-yellow-900/20 border border-yellow-700 rounded">
                            <span className="text-yellow-400">⟳</span>
                            <span className="text-yellow-300">
                                Initializing Firebase...
                            </span>
                        </div>
                    )}
                </div>

                {isInitialized && (
                    <div className="border-t border-slate-700 pt-6">
                        <h2 className="text-sm font-semibold mb-4 text-slate-400 text-center">
                            Authentication
                        </h2>
                        <AuthTestComponent />
                    </div>
                )}
            </div>
        </main>
    );
}
