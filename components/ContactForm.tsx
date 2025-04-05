// components/ContactForm.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactForm() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                {/* Formulaire à gauche */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002b61]">
                        Contactez-nous
                    </h2>
                    <p className="text-[#d4092d] mb-8">
                        Une question ? Une idée de voyage ? Écrivez-nous !
                    </p>
                    <form onSubmit={handleSubmit} className="grid gap-4">
                        <input
                            type="text"
                            placeholder="Votre nom"
                            required
                            className="px-4 py-2 rounded border border-gray-300 bg-white"
                        />
                        <input
                            type="email"
                            placeholder="Votre email"
                            required
                            className="px-4 py-2 rounded border border-gray-300 bg-white"
                        />
                        <textarea
                            rows={4}
                            placeholder="Votre message..."
                            required
                            className="px-4 py-2 rounded border border-gray-300 bg-white"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#d4092d] text-white py-2 rounded hover:bg-red-700 transition"
                        >
                            Envoyer
                        </button>
                        {sent && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-green-600 mt-2"
                            >
                                ✅ Message envoyé avec succès !
                            </motion.p>
                        )}
                    </form>
                </motion.div>

                {/* 3 Polaroids à droite */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-[380px]"
                >
                    <div className="absolute top-0 left-10 rotate-[-10deg] z-10 shadow-xl">
                        <Image src="/images/testimonial1.jpg" alt="Client 1" width={180} height={200} className="rounded-xl border-4 border-white" />
                    </div>
                    <div className="absolute top-20 left-32 rotate-[6deg] z-20 shadow-xl">
                        <Image src="/images/testimonial2.jpg" alt="Client 2" width={180} height={200} className="rounded-xl border-4 border-white" />
                    </div>
                    <div className="absolute bottom-0 left-20 rotate-[-4deg] z-0 shadow-xl">
                        <Image src="/images/testimonial3.jpg" alt="Client 3" width={180} height={200} className="rounded-xl border-4 border-white" />
                    </div>
                    <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center text-[#002b61] font-semibold text-sm">
                        “Ils l'ont fait, pourquoi pas vous ?”
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
