import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 p-5 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-center md:text-left">My Portfolio</h1>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row  md:space-y-0 md:space-x-4 items-center">
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
