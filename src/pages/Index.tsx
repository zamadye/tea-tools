
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CLIPlayground } from "@/components/CLIPlayground";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <CLIPlayground />
      <Testimonials />
      <Footer />
    </div>
  );
}
