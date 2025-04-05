
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-portfolio-gray-light to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
            <p className="text-portfolio-teal font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-portfolio-gray-dark">
              Vishwas <span className="text-portfolio-blue">Madhak</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-portfolio-gray mb-6">
              Oracle Developer & Enterprise Application Specialist
            </p>
            <p className="text-portfolio-gray-dark max-w-md mb-8">
              Specializing in developing enterprise applications with Oracle APEX and creating efficient solutions for educational institutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="border border-portfolio-blue text-portfolio-blue py-2 px-6 rounded-md hover:bg-portfolio-blue hover:text-white transition-colors duration-300 font-medium">
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-md">
              <div className="w-full h-72 md:h-96 bg-gradient-to-tr from-portfolio-blue to-portfolio-teal rounded-lg shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="text-5xl font-bold mb-2">VM</div>
                    <div className="text-xl">Oracle Developer</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center text-portfolio-blue-dark">
                <div className="text-xs font-medium text-center">
                  <div className="font-bold">5+</div>
                  <div>Oracle</div>
                  <div>Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-portfolio-gray-dark hover:text-portfolio-blue transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
