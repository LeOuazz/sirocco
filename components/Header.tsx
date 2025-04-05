// components/Header.tsx
'use client';

// components/Header.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 bg-white ${
                scrolled ? 'shadow-md' : 'shadow-none'
            } animate-float p-4`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="#hero" className="text-xl font-bold text-[#002b61]">
                    Sirocco Eventours
                </Link>
                <nav className="space-x-4 text-sm">
                    <a href="#circuits" className="hover:underline">Circuits</a>
                    <a href="#services" className="hover:underline">Services</a>
                    <a href="#booking" className="hover:underline">Réservation</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </nav>
            </div>
        </motion.header>
    );
}
