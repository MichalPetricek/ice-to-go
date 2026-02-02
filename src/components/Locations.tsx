"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const locations = [
  { city: "Praha", address: "OC Letňany, Veselská 663", status: "active" },
  { city: "Praha", address: "Galerie Harfa, Českomoravská 2420/15a", status: "active" },
  { city: "Brno", address: "Galerie Vaňkovka, Ve Vaňkovce 1", status: "active" },
  { city: "Ostrava", address: "Forum Nová Karolina, Jantarová 3344/4", status: "active" },
  { city: "Plzeň", address: "OC Olympia, Písecká 972/1", status: "active" },
  { city: "Olomouc", address: "Galerie Šantovka, Polská 1", status: "active" },
  { city: "Liberec", address: "OC Nisa, České mládeže 456", status: "active" },
  { city: "České Budějovice", address: "IGY Centrum, Pražská tř. 1247/24", status: "active" },
  { city: "Hradec Králové", address: "Aupark, Gočárova třída 1754/48a", status: "coming" },
  { city: "Pardubice", address: "Galerie Pardubice", status: "coming" },
];

export default function Locations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<"all" | "active" | "coming">("all");

  const filteredLocations = locations.filter(
    (loc) => filter === "all" || loc.status === filter
  );

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
            Automaty po celé{" "}
            <span className="gradient-text">České republice</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Naše síť se neustále rozrůstá. Najděte nejbližší automat a ochutnejte 
            tu nejlepší zmrzlinu!
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { value: "all", label: "Všechny" },
            { value: "active", label: "V provozu" },
            { value: "coming", label: "Připravujeme" },
          ].map((btn) => (
            <motion.button
              key={btn.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(btn.value as typeof filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                filter === btn.value
                  ? "bg-gradient-to-r from-[#7dd3c0] to-[#5cb8a5] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Locations grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredLocations.map((location, index) => (
            <motion.div
              key={`${location.city}-${location.address}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 transition-all ${
                location.status === "active"
                  ? "border-[#7dd3c0] hover:shadow-[#7dd3c0]/20"
                  : "border-[#ffb347] hover:shadow-[#ffb347]/20"
              } hover:shadow-xl`}
            >
              {/* Status badge */}
              <div
                className={`absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  location.status === "active"
                    ? "bg-[#7dd3c0] text-white"
                    : "bg-[#ffb347] text-white"
                }`}
              >
                {location.status === "active" ? "V provozu" : "Brzy"}
              </div>

              {/* Location icon */}
              <div className="w-12 h-12 bg-gradient-to-r from-[#7dd3c0]/20 to-[#ffd6e0]/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                📍
              </div>

              {/* City */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {location.city}
              </h3>

              {/* Address */}
              <p className="text-gray-600 text-sm">
                {location.address}
              </p>

              {/* Action button */}
              {location.status === "active" && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 w-full py-2 bg-gradient-to-r from-[#7dd3c0] to-[#5cb8a5] text-white text-sm font-medium rounded-xl hover:shadow-lg transition-shadow"
                >
                  Navigovat →
                </motion.button>
              )}
            </motion.div>
          ))}
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
