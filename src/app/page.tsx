import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

// Lazy load components below the fold
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Features = dynamic(() => import("@/components/Features"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Locations = dynamic(() => import("@/components/Locations"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[200px]" />,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Features />
      <Locations />
      <Contact />
      <Footer />
    </main>
  );
}
