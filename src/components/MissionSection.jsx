import { MissionCard } from "./MissionCard";
import {
  faShieldAlt,
  faHeartbeat,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";


export function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-petmeOrange">Pet-First</span> Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing pet adoption by prioritizing health, safety, and perfect matches between pets and their forever homes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <MissionCard bg="bg-petmeOrange" icon={faShieldAlt} title="Health & Safety First">
            Every breeder and shelter in our network meets strict health and safety standards to ensure your new pet gets the best start in life.
          </MissionCard>

          <MissionCard bg="bg-petmeGold" icon={faHeartbeat} title="Personality Matching">
            Our unique matching system connects you with pets that fit your lifestyle and personality for a lifelong bond.
          </MissionCard>

          <MissionCard bg="bg-petmeOrange" icon={faHandsHelping} title="Sustainable Community">
            We're building a community that supports responsible pet ownership through education, resources, and ongoing support.
          </MissionCard>
        </div>
      </div>
    </section>
  );
}