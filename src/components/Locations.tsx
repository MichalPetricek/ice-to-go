"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Locations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kde-nas-najdete" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237dd3c0' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[#ffd6e0]/30 rounded-full text-[#e07a9b] font-medium text-sm mb-4">
            📍 Kde nás najdete
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Místa, která{" "}
            <span className="gradient-text">připravujeme</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Brzy budete moci ochutnat naši zmrzlinu na těchto místech!
          </p>
        </motion.div>

        {/* Partnerships info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 space-y-4"
        >
          <div className="bg-gradient-to-r from-[#7dd3c0]/10 to-[#5cb8a5]/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">⛽</div>
            <p className="text-gray-700 font-medium">
              Jednáme s několika řetězci benzínových pump
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#ffb347]/10 to-[#ffd6e0]/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">🚂</div>
            <p className="text-gray-700 font-medium">
              Vstoupili jsme do jednání s Českými dráhami, aby naše zmrzlina byla na každém nádraží
            </p>
          </div>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 relative"
        >
          <div className="bg-gradient-to-br from-[#e8f8f5] to-[#fff8e7] rounded-3xl p-8 md:p-12 text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Interaktivní mapa
            </h3>
            <p className="text-gray-600 mb-6">
              Brzy zde najdete interaktivní mapu všech našich automatů
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-gray-700 font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              Přidat se k odběru novinek
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
