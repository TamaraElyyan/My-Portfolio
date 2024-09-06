import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const profiles = [
  {
    name: 'LinkedIn',
    username: 'Tamara-Elyyan',
    icon: <FaLinkedin className="text-4xl text-gray-300" />,
    link: 'https://www.linkedin.com/in/tamara-elyyan-a50627158/',
  },
  {
    name: 'Github',
    username: 'TamaraElyyan',
    icon: <FaGithub className="text-4xl text-gray-300" />,
    link: 'https://github.com/TamaraElyyan',
  },
  
  {
    name: 'Instagram',
    username: '@tamara_refai',
    icon: <FaInstagram className="text-4xl text-gray-300" />,
    link: 'https://www.instagram.com/tamara_refai',
  },
];

const SocialProfiles = () => {
  return (
    <section className="bg-gray-900 py-8 px-4 md:px-16 text-center">
        
      <h3 className="text-lg uppercase tracking-wide text-gray-400 mb-2 font-bold">SOCIAL MEDIA  </h3>
      <h2 className="text-3xl bg-gradient-to-r from-cyan-900 to-cyan-200 bg-clip-text text-transparent font-bold text-center mb-8">
        Here’s My Social Media Profiles
      </h2>
      <div className="space-y-6">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-6 bg-gray-800 rounded-lg shadow-md"
          >
            <div className="flex items-center space-x-4">
              <div>{profile.icon}</div>
              <div>
                <h3 className="text-sm text-gray-400">{profile.name}</h3>
                <p className="text-xl font-bold text-white">{profile.username}</p>
              </div>
            </div>
            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg flex items-center space-x-2"
            >
              <span>Go</span>
              <span>↗</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProfiles;
