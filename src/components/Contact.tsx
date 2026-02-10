"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormState({ name: "", email: "", message: "" });
    alert("Děkujeme za vaši zprávu! Brzy se vám ozveme.");
  };

  return (
    <section id="kontakt" className="py-20 md:py-32 bg-gradient-to-br from-[#7dd3c0]/10 via-white to-[#ffd6e0]/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-80 h-80 border border-[#7dd3c0]/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 border border-[#ffd6e0]/20 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="flex justify-center">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-[#7dd3c0]/20 rounded-full text-[#5cb8a5] font-medium text-sm mb-4">
              Kontaktujte nás
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Máte otázky?{" "}
              <span className="gradient-text">Rádi pomůžeme!</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Ať už máte dotaz k našim automatům, chcete umístit automat ve vašem 
              prostoru, nebo jen chcete říct ahoj - jsme tu pro vás!
            </p>

            {/* Contact cards */}
            <div className="space-y-6">
              {[
                {
                  icon: "📧",
                  title: "Email",
                  value: "info@icetogo.cz",
                  link: "mailto:info@icetogo.cz",
                },
                {
                  icon: "📞",
                  title: "Telefon",
                  value: "603 93 99 93",
                  link: "tel:+420603939993",
                },
                {
                  icon: "🌐",
                  title: "Web",
                  value: "icetogo.cz",
                  link: "https://icetogo.cz",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-[#7dd3c0] to-[#5cb8a5] rounded-xl flex items-center justify-center text-2xl">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{contact.title}</div>
                    {contact.link ? (
                      <a
                        href={contact.link}
                        className="font-semibold text-gray-800 hover:text-[#7dd3c0] transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <div className="font-semibold text-gray-800">
                        {contact.value}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-10">
              <div className="text-sm text-gray-500 mb-4">Sledujte nás</div>
              <div className="flex gap-4">
                {["📘", "📸", "🐦"].map((icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-xl hover:shadow-xl transition-shadow"
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form - temporarily hidden, backend not ready (emailjs) */}
          {/* 
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Napište nám
              </h3>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Jméno
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#7dd3c0] focus:outline-none transition-colors"
                    placeholder="Vaše jméno"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#7dd3c0] focus:outline-none transition-colors"
                    placeholder="vas@email.cz"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Zpráva
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#7dd3c0] focus:outline-none transition-colors resize-none"
                    placeholder="Vaše zpráva..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-[#7dd3c0] to-[#5cb8a5] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="inline-block"
                    >
                      ⏳
                    </motion.span>
                  ) : (
                    "Odeslat zprávu →"
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
          */}
        </div>
      </div>
    </section>
  );
}
