"use client";

import { useState } from "react";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const valid = email.includes("@") && message.trim().length >= 10;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!valid) {
            setStatus({
                type: "error",
                text: "Please provide a valid email and a message (10+ chars).",
            });
            return;
        }

        setLoading(true);
        setStatus(null);

        try {
            // No backend in this starter — simulate send and offer mailto fallback
            await new Promise((r) => setTimeout(r, 700));
            setStatus({
                type: "success",
                text: "Thanks! Your message was sent (simulated).",
            });
            setName("");
            setEmail("");
            setMessage("");
        } catch (err) {
            setStatus({
                type: "error",
                text: "Failed to send message. You can email us directly at hello@example.com.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="bg-slate-950 text-white min-h-screen px-6 py-16">
            <div className="mx-auto max-w-3xl">
                <h1 className="text-4xl font-extrabold">Contact</h1>
                <p className="mt-3 text-slate-300">
                    Have a question or feedback? Send us a message and we’ll get
                    back to you.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {status && (
                        <div
                            className={`rounded-3xl p-4 text-sm ${status.type === "error" ? "bg-red-900/10 border border-red-700/50 text-red-200" : "bg-emerald-900/10 border border-emerald-700/40 text-emerald-200"}`}
                        >
                            {status.text}
                        </div>
                    )}

                    <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col">
                            <span className="text-sm font-medium text-slate-300">
                                Name
                            </span>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-2 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                                placeholder="Your name (optional)"
                            />
                        </label>

                        <label className="flex flex-col">
                            <span className="text-sm font-medium text-slate-300">
                                Email
                            </span>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-2 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                                placeholder="you@example.com"
                                required
                                type="email"
                            />
                        </label>
                    </div>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium text-slate-300">
                            Message
                        </span>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="mt-2 min-h-[140px] rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                            placeholder="How can we help?"
                            required
                        />
                    </label>

                    <div className="flex items-center gap-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex items-center justify-center rounded-3xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? "Sending..." : "Send message"}
                        </button>

                        <a
                            href={`mailto:hello@example.com?subject=${encodeURIComponent("Contact from Revenio")}&body=${encodeURIComponent("\n\n---\nSent from Revenio contact form")}`}
                            className="text-sm text-slate-400 hover:text-slate-200"
                        >
                            Or email us directly
                        </a>
                    </div>
                </form>
            </div>
        </main>
    );
}
