import { NavBar } from "@/components/navBar/NavBar";
import { Hero } from "@/components/hero/Hero";
import { TrustedMarquee } from "@/components/trustedMarquee/TrustedMarquee";
import { DetectDiagnosis } from "@/components/detectDiagnosis/DetectDiagnosis";
import { ReplacesBar } from "@/components/replacesBar/ReplacesBar";
import { CaptureIntelligence } from "@/components/captureIntelligence/CaptureIntelligence";
import { GapSection } from "@/components/gapSection/GapSection";
import { Capabilities } from "@/components/capabilities/Capabilities";
import { HowItWorks } from "@/components/howItWorks/HowItWorks";
import { InTheField } from "@/components/inTheField/InTheField";
import { Outcomes } from "@/components/outcomes/Outcomes";
import { FieldVision } from "@/components/fieldVision/FieldVision";
import { BuiltForAssets } from "@/components/builtForAssets/BuiltForAssets";
import { PortalShowcase } from "@/components/portalShowcase/PortalShowcase";
import { Pricing } from "@/components/pricing/Pricing";
import { Faq } from "@/components/faq/Faq";
import { DemoBanner } from "@/components/demoBanner/DemoBanner";
import { Footer } from "@/components/footer/Footer";
import { SupportFab } from "@/components/supportFab/SupportFab";

const HomePage = () => {
  return (
    <div className="relative mx-auto w-full  overflow-x-clip bg-white">
      <NavBar />
      <main>
        <Hero />
        <TrustedMarquee />
        <DetectDiagnosis />
        <ReplacesBar />
        <CaptureIntelligence />
        <GapSection />
        <Capabilities />
        <HowItWorks />
        <InTheField />
        <Outcomes />
        <FieldVision />
        <BuiltForAssets />
        <PortalShowcase />
        <Pricing />
        <Faq />
        <DemoBanner />
      </main>
      <Footer />
      <SupportFab />
    </div>
  );
};

export default HomePage;
