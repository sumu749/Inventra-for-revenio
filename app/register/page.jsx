"use client";

import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white p-6">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-4 text-center">
                    Create account
                </h1>
                <RegisterForm />
            </div>
        </main>
    );
}
