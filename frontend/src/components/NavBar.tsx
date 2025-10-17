import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Code } from "lucide-react";
import { Menu } from "lucide-react";

const NavBar: React.FC = () => {
  const [isopen, setIsopen] = useState(false);

  const handleToggleMenu = () => {
    setIsopen(!isopen);
  };

  return (
    <nav className="fixed w-full z-50 py-4 backdrop-blur-md bg-black/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-10 lg:px-20">
        {/* Logo / Name */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <Code
              color="white"
              className="relative z-10 font-extrabold"
              size={28}
            ></Code>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-tight group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
            Hijus-Tech
          </span>
        </Link>
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="relative text-gray-300 hover:text-white font-medium transition-all duration-300 group"
          >
            Accueil
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <a
            href="#apropos"
            className="relative text-gray-300 hover:text-white font-medium transition-all duration-300 group"
          >
            À propos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#competences"
            className="relative text-gray-300 hover:text-white font-medium transition-all duration-300 group"
          >
            Compétences
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#project"
            className="relative text-gray-300 hover:text-white font-medium transition-all duration-300 group"
          >
            Projets
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#servis"
            className="relative text-gray-300 hover:text-white font-medium transition-all duration-300 group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contacte"
            className="relative px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={handleToggleMenu}
            className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <Menu color="white" size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isopen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-md border-t border-white/10 px-5 py-4 space-y-3">
          <Link
            to="/"
            className="block text-gray-300 hover:text-white font-medium transition-colors py-2"
            onClick={() => setIsopen(false)}
          >
            Accueil
          </Link>
          <a
            href="#apropos"
            className="block text-gray-300 hover:text-white font-medium transition-colors py-2"
            onClick={() => setIsopen(false)}
          >
            À propos
          </a>
          <a
            href="#competences"
            className="block text-gray-300 hover:text-white font-medium transition-colors py-2"
            onClick={() => setIsopen(false)}
          >
            Compétences
          </a>
          <a
            href="#project"
            className="block text-gray-300 hover:text-white font-medium transition-colors py-2"
            onClick={() => setIsopen(false)}
          >
            Projets
          </a>
          <a
            href="#servis"
            className="block text-gray-300 hover:text-white font-medium transition-colors py-2"
            onClick={() => setIsopen(false)}
          >
            Services
          </a>
          <a
            href="#contacte"
            className="block text-center px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full font-medium text-white transition-all duration-300 hover:scale-105"
            onClick={() => setIsopen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
