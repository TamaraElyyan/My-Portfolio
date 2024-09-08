import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <p className="text-indigo-400 mb-2 text-lg sm:text-xl">Welcome to my website!</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500">
            Full-Stack Developer
          </span>
        </h1>
        <p className="mt-4 text-gray-400 text-base sm:text-lg">
          Hey <span role="img" aria-label="wave">👋</span>, I'm Tamara, a skilled Full-Stack Developer from Palestine. I excel in remote collaboration with global talents, turning your ideas into actionable projects. Let's bring your dreams to life together!
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#contact"
            className="bg-gradient-to-r from-yellow-400 to-blue-500 text-white py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            Contact Me
          </a>
          <a
  href="/My CV.pdf"
  className="bg-gray-800 text-white py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-opacity"
  download
>
  Download CV
</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
