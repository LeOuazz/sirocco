// app/layout.tsx
import '../app/globals.css';
import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="fr" className="scroll-smooth">
        <body className="bg-white text-[#002b61] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}
