import React from 'react';
import Project1 from '../Asserts/PNG/Project1.webp';

const projects = [
  {
    title: 'Traveler & Booking',
    link: '#',
    imageUrl: Project1,
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white text-center px-6">
      <h3 className="text-lg uppercase tracking-wide text-gray-400 mb-2 font-bold">Projects</h3>
      <h2 className="text-3xl bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent font-bold mb-8">
        Check out My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 relative overflow-hidden"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a
                href={project.link}
                className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-4 py-2 rounded-full text-sm hover:bg-gradient-to-l"
              >
                View Project &rarr;
              </a>
            </div>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
