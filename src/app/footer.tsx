import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Column 1 - About Us (Always visible) */}
        <div>
          <h2 className="text-lg font-bold text-orange-500">About Us</h2>
          <p className="mt-4 text-sm">
            Corporate clients and leisure travelers have been relying on Foodtuck for dependable café and dining services.
          </p>
          <p className="mt-4 text-sm">
            <strong>Opening Hours:</strong>
            <br />
            Mon-Sat: 9:00 - 6:00
            <br />
            Sunday: Closed
          </p>
        </div>

        {/* Column 2 - Useful Links (Hidden on mobile) */}
        <div className="hidden md:block">
          <h2 className="text-lg font-bold text-orange-500">Useful Links</h2>
          <ul className="mt-4 text-sm space-y-2">
            {["About", "News", "Partners", "Team", "Menu", "Contacts"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-orange-500">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Help (Hidden on mobile) */}
        <div className="hidden md:block">
          <h2 className="text-lg font-bold text-orange-500">Help</h2>
          <ul className="mt-4 text-sm space-y-2">
            {["FAQ", "Terms & Conditions", "Reporting", "Documentation", "Support Policy", "Privacy"].map((help) => (
              <li key={help}>
                <a href="#" className="hover:text-orange-500">
                  {help}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Recent Posts (Hidden on mobile) */}
        <div className="hidden md:block">
          <h2 className="text-lg font-bold text-orange-500">Recent Posts</h2>
          <ul className="mt-4 text-sm space-y-2">
            {["Keep Your Business", "Keep Your Business", "Keep Your Business"].map((post, index) => (
              <li key={index}>
                <div className="flex gap-4">
                  <Image
                    src="/mini.png"
                    height={100}
                    width={100}
                    alt="Recent Post"
                    className="w-12 h-12 object-cover"
                  />
                  <div>
                    <p className="hover:text-orange-500">{post}</p>
                    <p className="text-xs text-gray-500">26 Feb 2022</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Section (Always visible) */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        <p className="text-gray-500">Copyright © 2022 by Ayman. All Rights Reserved.</p>
        <div className="hidden md:flex justify-center mt-4 gap-4">
          {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-gray-500 hover:text-orange-500"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;