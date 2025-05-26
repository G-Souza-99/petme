export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <i className="fas fa-paw text-3xl text-petmeOrange mr-2" />
              <span className="text-2xl font-bold text-petmeOrange">PetMe</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting pet lovers with trusted breeders and shelters to create happy, healthy pet families.
            </p>
            <div className="flex space-x-4">
              {[
                { href: "#", icon: "fab fa-facebook-f" },
                { href: "#", icon: "fab fa-instagram" },
                { href: "#", icon: "fab fa-twitter" },
                { href: "#", icon: "fab fa-tiktok" },
              ].map((link) => (
                <a key={link.icon} href={link.href} className="text-gray-400 hover:text-petmeGold transition-all">
                  <i className={`${link.icon} text-xl`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-petmeGold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: "#mission", label: "Our Mission" },
                { to: "#benefits", label: "Benefits" },
                { to: "#community", label: "Community" },
                { to: "#join", label: "Join Waitlist" },
              ].map((item) => (
                <li key={item.to}>
                  <a href={item.to} className="text-gray-400 hover:text-petmeGold transition-all">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-petmeGold">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-petmeOrange" /> hello@petme.com
              </li>
              {/* <li className="flex items-center">
                <i className="fas fa-phone mr-2 text-petmeOrange" /> (123) 456-7890
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mr-2 mt-1 text-petmeOrange" /> 123 Pet Street
                <br />Animal City, PC 12345
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} PetMe. All rights reserved. Made with <i className="fas fa-heart text-petmeOrange" /> for pets everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
