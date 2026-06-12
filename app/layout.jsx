import "./globals.css";
import { AuthProvider } from "@/providers/AuthProvider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
    title: "Inventra - Inventory management for modern SaaS products",
    description: "Next.js App Router starter project",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                <AuthProvider>
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
}
