
import React, { useState } from 'react';
import { File, X } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogCancel
} from '@/components/ui/alert-dialog';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Oracle AI Vector Search Certified Professional',
      issuer: 'Oracle',
      date: 'April 2025',
      description: 'Certification validating SQL knowledge and the ability to use SQL to manipulate data within Oracle Database environment.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Oracle APEX Developer Certified Professional',
      issuer: 'Oracle',
      date: 'March 2025',
      description: 'Professional certification demonstrating expertise in building Oracle APEX applications with advanced features.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundation Associate',
      issuer: 'Oracle',
      date: 'March 2025',
      description: 'Certification validates foundational knowledge of AI concepts and their practical application within Oracle Cloud Infrastructure..',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <section id="certificates" className="bg-portfolio-gray-light py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">My Certificates</h2>
        <p className="text-center text-portfolio-gray max-w-2xl mx-auto mb-12">
          I hold several Oracle certifications that validate my expertise and knowledge in Oracle technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div 
              key={certificate.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-portfolio-blue"
            >
              <div className="bg-portfolio-blue/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <File className="text-portfolio-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-portfolio-gray-dark">{certificate.title}</h3>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-portfolio-blue font-medium">{certificate.issuer}</span>
                <span className="text-portfolio-gray">{certificate.date}</span>
              </div>
              <p className="text-portfolio-gray text-sm">{certificate.description}</p>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="mt-4 text-portfolio-blue hover:text-portfolio-blue-dark text-sm font-medium flex items-center gap-1 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span>View Certificate</span>
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-3xl p-0 overflow-hidden">
                  <div className="relative">
                    <AlertDialogCancel className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 border-none">
                      <X className="h-4 w-4" />
                    </AlertDialogCancel>
                    <img 
                      src={certificate.image} 
                      alt={`${certificate.title} certificate`} 
                      className="w-full object-contain"
                    />
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
