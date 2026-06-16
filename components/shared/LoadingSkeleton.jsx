"use client";

export default function LoadingSkeleton({ count = 6 }) {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="animate-pulse rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-lg shadow-black/20"
                >
                    <div className="mb-4 h-48 rounded-3xl bg-slate-800" />
                    <div className="space-y-3">
                        <div className="h-4 w-3/4 rounded-full bg-slate-800" />
                        <div className="h-3 w-1/2 rounded-full bg-slate-800" />
                        <div className="h-3 w-full rounded-full bg-slate-800" />
                        <div className="h-3 w-5/6 rounded-full bg-slate-800" />
                    </div>
                </div>
            ))}
        </div>
    );
}
