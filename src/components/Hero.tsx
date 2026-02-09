"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#e8f8f5] via-white to-[#fff8e7]">
      {/* Animated background blobs - using CSS animations for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-80 h-80 bg-[#7dd3c0]/30 rounded-full blur-3xl animate-blob"
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#ffd6e0]/40 rounded-full blur-3xl animate-blob animation-delay-2000"
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#ffb347]/20 rounded-full blur-3xl animate-blob animation-delay-4000"
        />
      </div>

      {/* Decorations */}
      <div className="absolute top-20 left-10 text-6xl opacity-20">🍦</div>
      <div className="absolute top-40 right-20 text-5xl opacity-20">🍨</div>
      <div className="absolute bottom-40 left-20 text-4xl opacity-20">❄️</div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-[#7dd3c0]/20 rounded-full text-[#5cb8a5] font-medium text-sm mb-6"
            >
              🎉 Nová generace zmrzlinových automatů
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
            >
              Čerstvá zmrzlina{" "}
              <span className="gradient-text">kdykoliv</span>{" "}
              a{" "}
              <span className="gradient-text">kdekoliv</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Naše automaty automaticky natočí perfektní zmrzlinu během několika sekund. 
              Najdete nás na mnoha místech po celé České republice!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#kde-nas-najdete"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#7dd3c0] to-[#5cb8a5] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                Najít automat 📍
              </motion.a>
              <motion.a
                href="#jak-to-funguje"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow border-2 border-[#7dd3c0]"
              >
                Jak to funguje?
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              {[
                { number: "15+", label: "Automatů" },
                { number: "50k+", label: "Spokojených zákazníků" },
                { number: "24/7", label: "Dostupnost" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#7dd3c0]">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src="/images/WhatsApp Image 2026-01-09 at 14.19.42.jpeg"
                  alt="Ice To Go zmrzlinový automat"
                  width={500}
                  height={700}
                  className="w-full h-auto drop-shadow-2xl rounded-3xl"
                  priority
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#7dd3c0]/20 to-transparent rounded-3xl blur-2xl -z-10" />
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-[#ffb347]/30 rounded-full blur-xl" />
            <div className="absolute bottom-20 left-0 w-32 h-32 bg-[#ffd6e0]/40 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#7dd3c0] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 bg-[#7dd3c0] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
