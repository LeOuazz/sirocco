// components/CircuitsSection.tsx
'use client';

import { motion } from 'framer-motion';

const circuits = [
  {
    title: 'Chine',
    description: 'Un voyage au cœur des contrastes entre modernité et traditions millénaires.',
    video: '/videos/chine.mp4'
  },
  {
    title: 'Vietnam',
    description: 'Entre rizières, montagnes et baies féériques, vivez le Vietnam autrement.',
    video: '/videos/vietnam.mp4'
  },
  {
    title: 'Inde',
    description: 'L’Inde mystique et le Cachemire éternel pour une immersion sensorielle inédite.',
    video: '/videos/inde.mp4'
  }
];

export default function CircuitsSection() {
  return (
      <section id="circuits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#002b61]"
          >
            Nos Circuits du moment
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {circuits.map((circuit, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
                >
                  <video
                      src={circuit.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-[#002b61]">{circuit.title}</h3>
                    <p className="text-gray-700 text-sm">{circuit.description}</p>
                  </div>
                </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
                href="/circuits"
                className="inline-block text-[#d4092d] font-semibold hover:underline"
            >
              Voir tous nos circuits →
            </a>
          </div>
        </div>
      </section>
  );
}
