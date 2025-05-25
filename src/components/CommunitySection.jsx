import { faComments, faGraduationCap, faCalendarAlt as faCalAlt } from "@fortawesome/free-solid-svg-icons";
import { Fa } from "./Fa";
function CommunityCard({ icon, title, children }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 card-hover transition-all text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-petmeLight text-petmeOrange w-20 h-20 rounded-full flex items-center justify-center">
          <Fa icon={icon} className="text-3xl" />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}

export function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Join Our <span className="text-petmeOrange">Pet-Loving</span> Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PetMe isn't just about finding pets - it's about building relationships that last a lifetime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <CommunityCard icon={faComments} title="Share Experiences">
            Connect with other pet owners to share stories, advice, and celebrate your pet's milestones together.
          </CommunityCard>
          <CommunityCard icon={faGraduationCap} title="Learn Together">
            Access exclusive workshops and training sessions with pet care experts and behaviorists.
          </CommunityCard>
          <CommunityCard icon={faCalAlt} title="Pet-Friendly Events">
            Join our regular meetups, playdates, and pet-friendly adventures in your local area.
          </CommunityCard>
        </div>

        <div className="bg-gradient-to-r from-petmeOrange to-petmeGold rounded-xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Find Your Perfect Pet Companion?
            </h3>
            <p className="text-xl mb-8">
              Join our growing community of responsible pet lovers and start your journey to finding the perfect furry family member.
            </p>
            <a
              href="#join"
              className="bg-white text-petmeOrange px-8 py-3 rounded-md text-lg font-bold hover:bg-opacity-90 transition-all inline-block"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}