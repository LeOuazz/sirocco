// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section
            id="hero"
            className="py-24 md:py-32 bg-white px-6"
        >
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                {/* Texte */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center md:text-left md:max-w-lg"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#002b61] mb-4">
                        Bienvenue chez Sirocco Eventours
                    </h1>
                    <p className="text-[#333] text-lg mb-6">
                        Découvrez le Maroc autrement. Circuits authentiques, expériences uniques,
                        événements inoubliables. Notre équipe transforme vos envies en réalité.
                    </p>
                    <a
                        href="#circuits"
                        className="inline-block bg-[#d4092d] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-red-700 transition"
                    >
                        Voir nos circuits
                    </a>
                </motion.div>

                {/* Polaroids */}
                <div className="relative w-full md:w-[500px] h-[300px]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute left-0 top-0 rotate-[-10deg] shadow-xl"
                    >
                        <Image
                            src="/images/marrakech.jpg"
                            alt="Marrakech"
                            width={180}
                            height={200}
                            className="rounded-xl border-4 border-white"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute right-0 top-20 rotate-[8deg] shadow-xl"
                    >
                        <Image
                            src="/images/desert.jpg"
                            alt="Désert"
                            width={180}
                            height={200}
                            className="rounded-xl border-4 border-white"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
