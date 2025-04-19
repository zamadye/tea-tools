
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
