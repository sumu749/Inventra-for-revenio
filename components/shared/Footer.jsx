"use client";

export default function Footer() {
    return (
        <footer className="w-full border-t border-slate-800 mt-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-400 text-center">
                © {new Date().getFullYear()} Revenio. All rights reserved.
            </div>
        </footer>
    );
}
