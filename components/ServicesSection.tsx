// components/ServicesSection.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
    {
        slug: 'voyages',
        title: 'Voyages organisés',
        description: 'Des séjours clés en main à travers le Maroc et le monde.',
        icon: '🧳'
    },
    {
        slug: 'sur-mesure',
        title: 'Voyages sur mesure',
        description: 'Construisez votre voyage de rêve selon vos envies.',
        icon: '🧭'
    },
    {
        slug: 'transferts',
        title: 'Transferts & Billetterie',
        description: 'Billets d’avion, transferts privés ou collectifs.',
        icon: '✈️'
    },
    {
        slug: 'mice',
        title: 'MICE & Incentive',
        description: 'Organisation d’événements, séminaires et team building.',
        icon: '🏢'
    },
    {
        slug: 'omra',
        title: 'Voyages Omra',
        description: 'Omra économique, standard ou luxe.',
        icon: '🕋'
    },
    {
        slug: 'wedding',
        title: 'Wedding Planner',
        description: 'Mariages à la carte et célébrations uniques.',
        icon: '💍'
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#002b61]"
                >
                    Nos Services
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: [20, -6, 0] }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl animate-float transition-all"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-[#002b61]">{service.title}</h3>
                            <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                            <Link
                                href={`/${service.slug}`}
                                className="text-[#d4092d] text-sm font-medium hover:underline"
                            >
                                En savoir plus →
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
