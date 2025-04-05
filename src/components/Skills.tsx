
import React from 'react';
import { Check } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Oracle Technologies',
      skills: [
        { name: 'Oracle APEX', level: 90 },
        { name: 'Oracle Database', level: 85 },
        { name: 'PL/SQL', level: 80 },
        { name: 'Oracle Forms', level: 75 },
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'Responsive Design', level: 80 },
        { name: 'RESTful APIs', level: 70 },
      ]
    },
    {
      title: 'Other Skills',
      skills: [
        { name: 'Project Management', level: 80 },
        { name: 'Database Design', level: 85 },
        { name: 'UI/UX Design', level: 70 },
        { name: 'Technical Documentation', level: 75 },
      ]
    },
  ];

  return (
    <section id="skills" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">My Skills</h2>
        <p className="text-center text-portfolio-gray max-w-2xl mx-auto mb-12">
          I've developed a diverse set of skills focused on Oracle technologies and web development,
          enabling me to create comprehensive enterprise solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-portfolio-gray-light p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-portfolio-blue-dark">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-portfolio-gray-dark">{skill.name}</span>
                      <span className="text-sm font-medium text-portfolio-gray">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-portfolio-blue to-portfolio-teal h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-portfolio-blue/5 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center text-portfolio-blue-dark">Additional Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Data Migration',
              'Performance Optimization',
              'Security Implementation',
              'Cross-Browser Compatibility',
              'Agile Methodology',
              'ETL Processes',
              'Reporting Solutions',
              'System Integration',
              'Version Control'
            ].map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="text-portfolio-teal">
                  <Check size={18} />
                </div>
                <span className="text-portfolio-gray-dark">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
