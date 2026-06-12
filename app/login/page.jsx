"use client";

import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white p-6">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-4 text-center">
                    Login
                </h1>
                <LoginForm />
            </div>
        </main>
    );
}
