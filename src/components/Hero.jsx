import { Fa } from "./Fa";
import { faHeart, faHome } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="hero-gradient py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text */}
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Find Your Perfect <span className="text-petmeOrange">Furry</span> Companion
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              PetMe connects loving guardians with trusted breeders and shelters to create happy,
              healthy pet families. Join our community of passionate pet lovers today!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button href="#join" variant="primary">
                Join Our Community
              </Button>
              <Button href="#mission" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?auto=format&fit=crop&w=800&q=80"
              alt="Happy golden retriever puppy"
              className="rounded-xl shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-petmeGold p-4 rounded-xl shadow-lg hidden md:block">
              <Fa icon={faHeart} className="text-white text-3xl" />
            </div>
            <div className="absolute -top-6 -right-6 bg-petmeOrange p-4 rounded-xl shadow-lg hidden md:block">
              <Fa icon={faHome} className="text-white text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
