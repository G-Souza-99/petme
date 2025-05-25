export function JoinSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for joining our waitlist! We'll be in touch soon with more information.");
    e.target.reset();
  };

  return (
    <section id="join" className="py-20 bg-petmeLight">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Left */}
            <div className="md:w-1/2 bg-petmeOrange text-white p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Join Our Waitlist</h2>
              <p className="mb-6">
                Be the first to know when we launch in your area and get exclusive early access benefits!
              </p>
              <div className="space-y-4">
                {[
                  "Early access to premium features",
                  "Exclusive welcome gift for your new pet",
                  "Personalized matching consultation",
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <i className="fas fa-check-circle mr-3 text-xl" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="md:w-1/2 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-petmeOrange focus:border-petmeOrange transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-petmeOrange focus:border-petmeOrange transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-petmeOrange focus:border-petmeOrange transition-all"
                  >
                    <option value="adoption">Adopting from a shelter</option>
                    <option value="breeder">Finding a responsible breeder</option>
                    <option value="both">Both options</option>
                    <option value="community">Just joining the community</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="pet" className="block text-sm font-medium text-gray-700 mb-1">
                    Pet Preference
                  </label>
                  <select
                    id="pet"
                    name="pet"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-petmeOrange focus:border-petmeOrange transition-all"
                  >
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="other">Other</option>
                    <option value="none">Not sure yet</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-petmeOrange text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-petmeOrange focus:ring-offset-2"
                >
                  Join Waitlist
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
