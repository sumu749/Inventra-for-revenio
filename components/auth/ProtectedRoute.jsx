"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!loading && !user) {
            const currentPath = `${pathname}${
                searchParams.toString() ? `?${searchParams.toString()}` : ""
            }`;
            router.replace(
                `/login?redirect=${encodeURIComponent(currentPath)}`,
            );
        }
    }, [loading, user, pathname, searchParams, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/90 px-6 py-5 text-center shadow-xl shadow-black/20">
                    <p className="text-sm text-slate-400">
                        Checking authentication status...
                    </p>
                </div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return <>{children}</>;
}
