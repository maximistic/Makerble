

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Contact */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Makerble</h3>
          <ul>
            <li><a href="#about" className="hover:text-white">About us</a></li>
            <li><a href="#terms" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#privacy" className="hover:text-white">Privacy & Cookies</a></li>
          </ul>
        </div>

        {/* Organisations */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Organisations</h3>
          <ul>
            <li><a href="#control-panel" className="hover:text-white">Control Panel</a></li>
            <li><a href="#marketplace" className="hover:text-white">Discover the Marketplace</a></li>
            <li><a href="#create-account" className="hover:text-white">Create Organisation Account</a></li>
          </ul>
        </div>

        {/* Your Account */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Your Account</h3>
          <ul>
            <li><a href="#library" className="hover:text-white">Library</a></li>
            <li><a href="#profile" className="hover:text-white">Profile</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#linkedin" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#youtube" className="text-gray-400 hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#instagram" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#twitter" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#facebook" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        © Makerble 2023 | Contact: <a href="mailto:contact@makerble.com" className="hover:text-white">contact@makerble.com</a> | 020 8123 6253
      </div>
    </footer>
  );
};

export default Footer;