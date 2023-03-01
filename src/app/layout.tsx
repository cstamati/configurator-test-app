import "./globals.css";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
    variable: "--font-roboto",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${roboto.variable} font-sans`}>
            <head />
            <body>{children}</body>
        </html>
    );
}
