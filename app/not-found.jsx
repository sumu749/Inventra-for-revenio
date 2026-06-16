import Link from "next/link";

export default function NotFound() {
    return (
        <main className="bg-slate-950 text-white min-h-screen px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-slate-900/80 p-10 text-center shadow-2xl shadow-black/20">
                <p className="text-sm uppercase tracking-[0.32em] text-blue-300">
                    404 • Page not found
                </p>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white">
                    Oops — this page doesn’t exist.
                </h1>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                    The address may be wrong, or the item has already been
                    removed. Try navigating back to safety.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                    >
                        Home
                    </Link>
                    <Link
                        href="/items"
                        className="inline-flex rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
                    >
                        Browse items
                    </Link>
                </div>
            </div>
        </main>
    );
}
