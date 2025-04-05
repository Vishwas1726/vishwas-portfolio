
import React from 'react';
import { User, Calendar, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-portfolio-gray-dark">
              Oracle Developer & Application Specialist
            </h3>
            <p className="text-portfolio-gray mb-6">
              I specialize in developing enterprise applications with Oracle APEX, focusing on creating 
              efficient and user-friendly solutions for educational institutions. With a strong foundation 
              in Oracle technologies and a passion for problem-solving, I create applications that streamline 
              processes and enhance user experiences.
            </p>
            <p className="text-portfolio-gray mb-6">
              My recent projects include an E-governance application for NFA College and a Food Court 
              pre-ordering system that allows students and staff to conveniently order meals in advance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#projects" className="btn-primary flex items-center justify-center gap-2">
                <Briefcase size={18} />
                <span>View Projects</span>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-portfolio-gray-light p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white p-3 rounded-full shadow-sm text-portfolio-blue">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-gray-dark">Personal Details</h4>
                  <ul className="mt-2 space-y-2 text-portfolio-gray">
                    <li><span className="font-medium">Name:</span> Vishwas Madhak</li>
                    <li><span className="font-medium">Email:</span> vishwas.madhak@example.com</li>
                    <li><span className="font-medium">Location:</span> Maharashtra, India</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white p-3 rounded-full shadow-sm text-portfolio-blue">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-gray-dark">Professional Focus</h4>
                  <ul className="mt-2 space-y-2 text-portfolio-gray">
                    <li><span className="font-medium">Specialty:</span> Oracle APEX Development</li>
                    <li><span className="font-medium">Industry:</span> Educational Technology</li>
                    <li><span className="font-medium">Solutions:</span> E-governance, Process Automation</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-portfolio-blue">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-gray-dark">Experience</h4>
                  <ul className="mt-2 space-y-2 text-portfolio-gray">
                    <li><span className="font-medium">Oracle APEX:</span> 3+ Years</li>
                    <li><span className="font-medium">Database Management:</span> 3+ Years</li>
                    <li><span className="font-medium">Web Development:</span> 2+ Years</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
