
import React from 'react';
import { Code, Link } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Governance Application for NFA College',
      description: 'Developed and deployed a comprehensive e-governance solution for NFA College using Oracle APEX. The application streamlines administrative processes, enhances communication between departments, and provides a central platform for managing college resources.',
      technologies: ['Oracle APEX', 'PL/SQL', 'Oracle Database', 'REST APIs'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      status: 'Deployed'
    },
    {
      id: 2,
      title: 'Food Court Pre-ordering System',
      description: 'Currently developing an intuitive food court application that allows students and staff to pre-order meals from campus food outlets. This system reduces wait times, optimizes kitchen operations, and enhances the overall dining experience.',
      technologies: ['Oracle APEX', 'JavaScript', 'Oracle Database', 'Responsive UI'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      status: 'In Development'
    },
  ];

  return (
    <section id="projects" className="bg-portfolio-gray-light py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">My Projects</h2>
        <p className="text-center text-portfolio-gray max-w-2xl mx-auto mb-12">
          Here are the key projects I've worked on, showcasing my expertise in Oracle APEX development
          and enterprise application solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-0 right-0 bg-portfolio-blue text-white text-xs font-bold px-3 py-1 m-3 rounded z-10">
                  {project.status}
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-portfolio-gray-dark">{project.title}</h3>
                <p className="text-portfolio-gray mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-portfolio-blue/10 text-portfolio-blue-dark text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-1 text-portfolio-blue hover:text-portfolio-blue-dark text-sm font-medium transition-colors">
                    <Code size={16} />
                    <span>Project Details</span>
                  </button>
                  {project.status === 'Deployed' && (
                    <button className="flex items-center gap-1 text-portfolio-teal hover:text-portfolio-blue-dark text-sm font-medium transition-colors">
                      <Link size={16} />
                      <span>Live Demo</span>
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
