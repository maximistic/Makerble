const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold text-gradient bg-gradient-to-r from-pink-500 to-yellow-500">
          MAKERBLE
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#explore" className="text-gray-600 hover:text-gray-900">
            Explore
          </a>
          <a href="#apps" className="text-gray-600 hover:text-gray-900">
            My Apps
          </a>
        </div>

        {/* Action buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">
            Create
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md">
            Upgrade
          </button>
          <button className="text-gray-700 hover:text-gray-900">
            More
          </button>
        </div>

        {/* Icons and profile */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-500 relative">
            <i className="fa fa-bell"></i>
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="text-gray-500 relative">
            <i className="fa fa-envelope"></i>
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/30"
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
            <span>Yael</span>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-500 focus:outline-none">
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
