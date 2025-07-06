import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
    </main>
  );
}
