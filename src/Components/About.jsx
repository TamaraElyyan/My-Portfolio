import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white text-center px-6">
      <div className="container mx-auto">
        <h3 className="text-lg uppercase tracking-wide text-gray-400 mb-2">What About Me?</h3>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          I'm Tamara Elyyan,<br />
          Palestinian and <br />
          Full-Stack Developer
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          Meet Tamara Elyyan, a 26-year-old Palestinian talent, holding a bachelor degree in Communication engineering 
          from AL-QUDS University. Her expertise shines as a skilled Full-Stack developer based in Palestine.
        </p>
      </div>
    </section>
  );
};

export default About;
