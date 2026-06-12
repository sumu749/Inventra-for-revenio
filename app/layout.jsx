import "./globals.css";
import { AuthProvider } from "@/providers/AuthProvider";

export const metadata = {
    title: "Revenio",
    description: "Next.js App Router starter project",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}
