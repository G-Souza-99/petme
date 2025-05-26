import { useState } from "react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSePHjOiFDV3be4aNrEfjbF1kTP-nTD1yEFbOCBpjCgFtqYCgg/formResponse";

export function JoinSection() {
  const [sent, setSent] = useState(false);
  const [hover, setHover] = useState(false);

  /* ─── submit to Google Forms ─── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    await fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      mode: "no-cors",          // avoids CORS errors
      body: data,
    });

    setSent(true);
    e.target.reset();
  };

  /* ─── success banner ─── */
  if (sent) {
    return (
      <section id="join" className="py-20 bg-petmeLight">
        <div className="max-w-2xl mx-auto text-center text-petmeOrange font-semibold text-xl">
          🎉 Thanks for joining the waitlist — we’ll be in touch soon!
        </div>
      </section>
    );
  }

  /* ─── form + pitch ─── */
  return (
    <section id="join" className="py-20 bg-petmeLight">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* left column (pitch) */}
            <div className="md:w-1/2 bg-petmeOrange text-white p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Join Our Waitlist</h2>
              <p className="mb-6">
                Help us Shape PetMe - Join the founding pack!
              </p>
							<p className="mb-6">
                Get first dibs on our private beta, share feedback, and watch your ideas go live.
              </p>

              {/* perk list */}
              {[
                "Early beta access, explore core features before public launch",
                "Founders-only feedback loop — tell us what works (and what doesn't) and see updates land in real time.",
              ].map((perk) => (
                <div key={perk} className="flex items-center mb-4">
                  <i className="fas fa-check-circle mr-3 text-xl" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            {/* right column (form) */}
            <div className="md:w-1/2 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="entry.2092618662"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300
                               focus:ring-2 focus:ring-petmeOrange focus:border-petmeOrange transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="entry.984499149"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300
                               focus:ring-2 focus:ring-petmeOrange focus:border-petmeOrange transition-all"
                  />
                </div>

                {/* Interested in */}
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="entry.1849099285"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300
                               focus:ring-2 focus:ring-petmeOrange focus:border-petmeOrange transition-all"
                  >
                    <option value="adoption">Adopting from a shelter</option>
                    <option value="buy">
                      Buy from a responsible breeder
                    </option>
                    <option value="breeder">
                      Get started in responsible breeding
                    </option>
                    <option value="community">Just joining the community</option>
                  </select>
                </div>

                {/* Pet preference */}
                <div>
                  <label
                    htmlFor="pet"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pet Preference
                  </label>
                  <select
                    id="pet"
                    name="entry.952502900"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300
                               focus:ring-2 focus:ring-petmeOrange focus:border-petmeOrange transition-all"
                  >
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="other">Other</option>
                    <option value="none">Not sure yet</option>
                  </select>
                </div>

                {/* submit */}
                <button
                  type="submit"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  className={`w-full ${
                    hover ? "bg-petmeGold" : "bg-petmeOrange"
                  } text-white py-3 px-6 rounded-lg font-medium
                             transition-all hover:bg-opacity-90
                             focus:outline-none focus:ring-2
                             focus:ring-petmeOrange focus:ring-offset-2`}
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