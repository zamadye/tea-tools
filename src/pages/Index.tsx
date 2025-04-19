
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CLIPlayground } from "@/components/CLIPlayground";
import { OpenSourceStats } from "@/components/OpenSourceStats";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Hero />
      <Features />
      <CLIPlayground />
      <OpenSourceStats />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
