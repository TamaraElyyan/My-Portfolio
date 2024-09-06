import React from 'react';
import myschool from '../Asserts/PNG/School.jpg';
import ALQDUSUNI from '../Asserts/PNG/unnamed.png';
import CCNA from '../Asserts/PNG/CCNA.jpg';
import asal from '../Asserts/PNG/ASAL.png';
import ooredoo from '../Asserts/PNG/ooredoo.webp'
import Seveneighths from "../Asserts/PNG/Seventh.jpg"
import Palsoft from '../Asserts/PNG/Palsoft.jpeg'

const achievements = [
  {
    year: 2016,
    title: 'School Graduation',
    description:
      'Graduated from Anata Girls Secondary School with an  average of 83.7, marking the end of a successful academic journey that began in 2015.',
    imageSrc: myschool, 
  },
  {
    year: 2019,
    title: 'CCNA - Cisco Certified Network Associate',
    description:
      'Earned the Cisco Certified Network Associate (CCNA) certification, demonstrating a solid understanding of networking principles and the ability to manage and troubleshoot networks.',
    imageSrc: CCNA, 
  },
  {
    year: 2021,
    title: 'University Graduation',
    description:
    'Completed my Bachelor’s degree in Communication Engineering from AL-QUDS UNIVERSITY, Palestine, building a strong foundation in communication systems, networking, and signal processing.',
    imageSrc: ALQDUSUNI, 
  },
  {
    year: 2022,
    title: 'Internship at ASAL Technologies',
    description:
      'Completed a QA internship at ASAL Technologies from March to July 2022, gaining hands-on experience in quality assurance processes and testing methodologies within a professional environment.',
    imageSrc: asal, 
  },
  {
    year: 2023,
    title: 'Ooredoo Palestine - PS Core Engineer',
    description:
      'Worked as a PS Core Engineer at Ooredoo Palestine, focusing on the optimization and maintenance of packet-switched networks, from August 2023 to February 2024.',
    imageSrc: ooredoo, 
  },
  {
    year: 2024,
    title: 'Seveneighths Academy - Full Stack Course',
    description:
      'Enrolled in a comprehensive Full Stack Development course at Seveneighths Academy, starting in April 2024. This experience enhanced my skills in both front-end and back-end technologies.',
    imageSrc: Seveneighths, 
  },
  {
    year: 2024,
    title: 'PalSoft - React JS',
    description:
      'Successfully completed a specialized React JS course at PalSoft from July to August 2024, focusing on building dynamic and responsive user interfaces with React.',
    imageSrc: Palsoft, 
  },
  
];

const CenteredTimeline = () => {
    return (
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-lg uppercase tracking-wide text-gray-400 mb-2 font-bold text-center">
            My Achievements
          </h3>
          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-center">
            Discover My Achievements
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-green-500"></div>
            <div className="flex flex-col gap-12">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:pr-10' : 'md:pl-10 md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full z-10">
                    {achievement.year}
                  </div>
                  <div className="md:w-1/2 p-4 flex justify-center md:mr-8 md:ml-8">
                    <img
                      src={achievement.imageSrc}
                      alt={achievement.title}
                      className="rounded-lg shadow-lg w-90 h-80 object-cover transform transition-transform duration-500 hover:rotate-3 hover:scale-105"
                    />
                  </div>
                  <div className="md:w-1/2 p-6 text-center md:text-left md:mr-8 md:ml-8 transition-opacity duration-500 ease-in-out transform hover:opacity-100 hover:translate-y-0 opacity-75 translate-y-4">
                    <h3 className="text-3xl font-bold mb-4">{achievement.title}</h3>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
};

export default CenteredTimeline;
