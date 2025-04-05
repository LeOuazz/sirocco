'use client';

import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

export default function Footer() {
    return (
        <motion.footer
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full py-6 text-center text-xs text-gray-500 border-t dark:border-gray-700 animate-float"
        >
            <div className="flex justify-center gap-6 mb-2 text-gray-500 dark:text-gray-400 text-lg">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                    <FaInstagram />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                    <FaFacebookF />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                    <FaLinkedinIn />
                </a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
                    <FaTiktok />
                </a>
            </div>
            <p>© {new Date().getFullYear()} Sirocco Eventours. Tous droits réservés.</p>
        </motion.footer>
    );
}
