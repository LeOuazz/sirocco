// components/BookingBar.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHotel, FaCar, FaPlane, FaShip, FaTrain, FaBus, FaWater, FaMapMarkedAlt, FaUmbrellaBeach } from 'react-icons/fa';


const MotionH2 = motion.h2;

const services = [
    { name: 'Hôtel', icon: <FaHotel /> },
    { name: 'Voiture', icon: <FaCar /> },
    { name: 'Avion', icon: <FaPlane /> },
    { name: 'Bateau', icon: <FaShip /> },
    { name: 'Train', icon: <FaTrain /> },
    { name: 'Bus', icon: <FaBus /> },
    { name: 'Croisière', icon: <FaWater /> },
    { name: 'Activités', icon: <FaUmbrellaBeach /> },
    { name: 'Circuits', icon: <FaMapMarkedAlt /> },
];

export default function BookingBar() {
    const [selectedService, setSelectedService] = useState('Hôtel');

    const renderForm = () => (
        <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <input
                type="text"
                placeholder="Ville de départ"
                className="px-4 py-2 rounded bg-white text-[#002b61]"
            />
            <input
                type="text"
                placeholder="Destination"
                className="px-4 py-2 rounded bg-white text-[#002b61]"
            />
            <input
                type="date"
                className="px-4 py-2 rounded bg-white text-[#002b61]"
            />
            <input
                type="date"
                className="px-4 py-2 rounded bg-white text-[#002b61]"
            />
            <input
                type="number"
                placeholder="Nombre de personnes"
                className="px-4 py-2 rounded bg-white text-[#002b61]"
            />
            <button
                type="submit"
                className="bg-white text-[#d4092d] font-semibold py-2 px-4 rounded hover:bg-gray-100 transition"
            >
                Rechercher
            </button>
        </form>
    );

    return (
        <section id="booking" className="py-24 bg-[#d4092d] text-white animate-float">
            <div className="max-w-6xl mx-auto px-6">
                {/* @ts-ignore */}
                <MotionH2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-10"
                >
                    Réservez votre service
                </MotionH2>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {services.map((service) => (
                        <button
                            key={service.name}
                            onClick={() => setSelectedService(service.name)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
                                selectedService === service.name
                                    ? 'bg-white text-[#d4092d]'
                                    : 'bg-[#ffffff22] hover:bg-[#ffffff44] text-white'
                            }`}
                        >
                            {service.icon}
                            {service.name}
                        </button>
                    ))}
                </div>

                <div className="bg-[#ffffff22] backdrop-blur-md p-6 rounded-lg shadow-lg">
                    {renderForm()}
                </div>
            </div>
        </section>
    );
}
