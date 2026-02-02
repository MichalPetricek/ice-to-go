"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    icon: "🔍",
    title: "Najděte automat",
    description: "Pomocí naší mapy najděte nejbližší Ice To Go automat ve vašem okolí.",
    color: "from-[#7dd3c0] to-[#5cb8a5]",
  },
  {
    icon: "📱",
    title: "Vyberte si příchuť",
    description: "Na dotykovém displeji si vyberte z nabídky lahodných příchutí zmrzliny.",
    color: "from-[#ffb347] to-[#ff9a2e]",
  },
  {
    icon: "💳",
    title: "Zaplaťte jednoduše",
    description: "Platba kartou nebo hotově - jak vám vyhovuje. Rychle a bez čekání.",
    color: "from-[#ffd6e0] to-[#ffb8c9]",
  },
  {
    icon: "🍦",
    title: "Vychutnejte si!",
    description: "Automat vám během okamžiku natočí čerstvou, krémovou zmrzlinu.",
    color: "from-[#a8e6cf] to-[#7dd3c0]",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="jak-to-funguje" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#7dd3c0]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ffd6e0]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#7dd3c0]/20 rounded-full text-[#5cb8a5] font-medium text-sm mb-4">
            Jak to funguje
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Zmrzlina za <span className="gradient-text">pár sekund</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Získání lahodné zmrzliny nebylo nikdy jednodušší. Stačí 4 jednoduché kroky.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow h-full border border-gray-100"
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-[#7dd3c0] to-[#5cb8a5] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>

                {/* Connecting line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#7dd3c0] to-transparent" />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#kde-nas-najdete"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#7dd3c0] to-[#5cb8a5] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            Vyzkoušet hned
            <span className="text-xl">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
