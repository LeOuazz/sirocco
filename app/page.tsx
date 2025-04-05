// app/page.tsx
'use client';

import Hero from '../components/Hero';
import CircuitsSection from '../components/CircuitsSection';
import ServicesSection from '../components/ServicesSection';
import BookingBar from '../components/BookingBar';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
    return (
        <main className="bg-white text-[#002b61]">
            <Hero />
            <CircuitsSection />
            <ServicesSection />
            <BookingBar />
            <ContactForm />
        </main>
    );
}
