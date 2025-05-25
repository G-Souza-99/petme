import { Fa } from "./Fa";
import {
  faCheck,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";

export function BenefitsSection() {
  const CheckIcon = (
    <div className="bg-petmeGold text-white p-3 rounded-lg mr-4">
      <Fa icon={faCheck} className="text-xl" />
    </div>
  );
  const PawIcon = (
    <div className="bg-petmeOrange text-white p-3 rounded-lg mr-4">
      <Fa icon={faPaw} className="text-xl" />
    </div>
  );

  return (
    <section id="benefits" className="py-20 bg-petmeLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why <span className="text-petmeOrange">PetMe</span> Stands Out
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We go beyond simple connections to create meaningful relationships between pets and their humans.
          </p>
        </div>

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=800&q=80"
              alt="Happy dog with family"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            {[
              {
                icon: CheckIcon,
                title: "Vetted Partners",
                text: "Every breeder and shelter undergoes rigorous vetting to ensure ethical practices and animal welfare standards.",
              },
              {
                icon: CheckIcon,
                title: "Transparent Process",
                text: "Complete transparency from first contact to bringing your pet home, with all health records and history provided.",
              },
              {
                icon: CheckIcon,
                title: "Lifetime Support",
                text: "Access to our community of experts and pet lovers for advice, resources, and support throughout your pet's life.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start mb-6">
                {item.icon}
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            {[
              {
                icon: PawIcon,
                title: "Personality Profiling",
                text: "Our matching algorithm considers your lifestyle, experience, and preferences to find your ideal pet companion.",
              },
              {
                icon: PawIcon,
                title: "Educational Resources",
                text: "Comprehensive guides and expert advice to prepare you for pet ownership and ensure a smooth transition.",
              },
              {
                icon: PawIcon,
                title: "Community Events",
                text: "Regular meetups, training sessions, and social events to connect with other pet lovers in your area.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start mb-6">
                {item.icon}
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=800&q=80"
              alt="Happy cat playing"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
