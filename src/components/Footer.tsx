"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#7dd3c0]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#ffd6e0]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold mb-4 inline-block"
            >
              <span className="text-[#7dd3c0]">Ice</span>
              <span className="text-[#ffb347]">To</span>
              <span className="text-[#ffd6e0]">Go</span>
            </motion.div>
            <p className="text-gray-400 max-w-md mb-6">
              Přinášíme vám čerstvou zmrzlinu kdykoliv a kdekoliv. 
              Naše automatické zmrzlinové automaty najdete po celé České republice.
            </p>
            <div className="flex gap-4">
              {[
                { icon: "📘", label: "Facebook" },
                { icon: "📸", label: "Instagram" },
                { icon: "🐦", label: "Twitter" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-xl hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rychlé odkazy</h3>
            <ul className="space-y-3">
              {[
                { href: "#jak-to-funguje", label: "Jak to funguje" },
                { href: "#nase-automaty", label: "Naše automaty" },
                { href: "#kde-nas-najdete", label: "Kde nás najdete" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-[#7dd3c0] transition-colors"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:info@icetogo.cz" className="hover:text-[#7dd3c0] transition-colors">
                  info@icetogo.cz
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+420603939993" className="hover:text-[#7dd3c0] transition-colors">
                  603 93 99 93
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>🌐</span>
                <a href="https://icetogo.cz" className="hover:text-[#7dd3c0] transition-colors">
                  icetogo.cz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} Ice To Go. Všechna práva vyhrazena.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-[#7dd3c0] transition-colors">
              Ochrana soukromí
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#7dd3c0] transition-colors">
              Obchodní podmínky
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
