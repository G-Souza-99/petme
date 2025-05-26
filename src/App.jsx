import Navbar from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { MissionSection } from "./components/MissionSection.jsx";
import { BenefitsSection } from "./components/BenefitsSection.jsx";
import { CommunitySection } from "./components/CommunitySection.jsx";
import { JoinSection } from "./components/JoinSection.jsx";
import { Footer } from "./components/Footer.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <MissionSection />
            <BenefitsSection />
            <CommunitySection />
            <JoinSection />
            <Footer />
          </>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
