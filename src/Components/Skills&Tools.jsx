import React from 'react';

const skills = [
  { name: 'ExpressJs', category: 'Frameworks' },
  { name: 'React', category: 'Frameworks' },
  { name: 'NodeJs', category: 'Frameworks' },
  { name: 'CSS3', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'HTML5', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'BootStrap5', category: 'Languages' },
  { name: 'Tailwind', category: 'Languages' },
  { name: 'MySQL', category: 'My Tools' },
  { name: 'VS Code', category: 'My Tools' },
  { name: 'Postman', category: 'My Tools' },
  { name: 'GitHub', category: 'My Tools' },
  { name: 'Linux', category: 'My Tools' },
  { name: 'WebStorm', category: 'My Tools' },
];



const categoryColors = {
  Frameworks: 'text-blue-700',
  Languages: 'text-red-700',
  'My Tools': 'text-green-700',
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white text-center   md:px-16 ">
      <div className="container mx-auto px-3 ">
        <h3 className="text-lg uppercase tracking-wide text-gray-400 mb-4 font-bold">
          Skills & Tools
        </h3>
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-red-700 via-green-700 to-blue-700 bg-clip-text text-transparent">
          Explore My Skills and Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-lg bg-gray-800 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h3
                className={`text-2xl font-semibold mb-1 ${
                  categoryColors[skill.category] || 'text-white'
                }`}
              >
                {skill.name}
              </h3>
              <p
                className={`uppercase text-sm tracking-wide ${
                  categoryColors[skill.category]
                }`}
              >
                
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
