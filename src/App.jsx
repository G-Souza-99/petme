import Navbar from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { MissionSection } from "./components/MissionSection.jsx";
import { BenefitsSection } from "./components/BenefitsSection.jsx";
import { CommunitySection } from "./components/CommunitySection.jsx";
import { JoinSection } from "./components/JoinSection.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MissionSection />
      <BenefitsSection />
      <CommunitySection />
      <JoinSection />
      <Footer />
    </>
  );
}