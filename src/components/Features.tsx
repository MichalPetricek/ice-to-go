"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  {
    icon: "🌡️",
    title: "Vždy čerstvá",
    description: "Zmrzlina je uchovávána při ideální teplotě a natáčena až v momentě objednávky.",
  },
  {
    icon: "⚡",
    title: "Rychlá příprava",
    description: "Vaše zmrzlina je připravena během několika sekund.",
  },
  {
    icon: "🎨",
    title: "Více příchutí",
    description: "Vybírejte z široké nabídky oblíbených příchutí.",
  },
  {
    icon: "💳",
    title: "Bezkontaktní platba",
    description: "Platba kartou, telefonem nebo hotově - vše bez čekání.",
  },
  {
    icon: "🌙",
    title: "24/7 dostupnost",
    description: "Naše automaty jsou k dispozici kdykoliv, i pozdě v noci.",
  },
  {
    icon: "✨",
    title: "Hygienické",
    description: "Plně automatizovaný proces zajišťuje maximální hygienu.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nase-automaty" className="py-20 md:py-32 bg-gradient-to-br from-[#f0fdf9] via-white to-[#fef7ee] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 text-[200px] opacity-5">🍦</div>
        <div className="absolute bottom-20 left-10 text-[150px] opacity-5">🍨</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="relative"
              >
                <Image
                  src="/images/WhatsApp Image 2026-01-09 at 14.19.42 (1).jpeg"
                  alt="Ice To Go automat"
                  width={300}
                  height={450}
                  className="rounded-3xl shadow-2xl w-full h-auto"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative mt-12"
              >
                <Image
                  src="/images/WhatsApp Image 2026-01-09 at 14.19.43.jpeg"
                  alt="Ice To Go automat detail"
                  width={300}
                  height={450}
                  className="rounded-3xl shadow-2xl w-full h-auto"
                />
              </motion.div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#7dd3c0] to-[#5cb8a5] rounded-xl flex items-center justify-center text-2xl">
                ⭐
              </div>
              <div>
                <div className="font-bold text-gray-800">4.9/5</div>
                <div className="text-sm text-gray-500">Hodnocení zákazníků</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-2 bg-[#ffb347]/20 rounded-full text-[#e59a3f] font-medium text-sm mb-4">
              Proč Ice To Go?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Moderní automaty pro{" "}
              <span className="gradient-text">moderní dobu</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Naše zmrzlinové automaty kombinují nejnovější technologie s tradičním 
              řemeslným přístupem k výrobě zmrzliny.
            </p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7dd3c0]/20 to-[#ffd6e0]/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
