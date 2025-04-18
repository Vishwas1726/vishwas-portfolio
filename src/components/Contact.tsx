
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Get In Touch</h2>
        <p className="text-center text-portfolio-gray max-w-2xl mx-auto mb-12">
          Interested in collaborating or have questions about my work? 
          Feel free to reach out through the form below or connect with me directly.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-portfolio-gray-dark">Contact Information</h3>
            <p className="text-portfolio-gray mb-6">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-blue/10 w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-blue">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-portfolio-gray-dark">Phone</h4>
                  <p className="text-portfolio-gray">+91 1234567890</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-blue/10 w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-blue">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-portfolio-gray-dark">Email</h4>
                  <p className="text-portfolio-gray">vishwas.madhak@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-blue/10 w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-blue">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-portfolio-gray-dark">Location</h4>
                  <p className="text-portfolio-gray">Maharashtra, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4 text-portfolio-gray-dark">Connect With Me</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-portfolio-blue/10 w-10 h-10 flex items-center justify-center rounded-full text-portfolio-blue hover:bg-portfolio-blue hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="bg-portfolio-blue/10 w-10 h-10 flex items-center justify-center rounded-full text-portfolio-blue hover:bg-portfolio-blue hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="#" className="bg-portfolio-blue/10 w-10 h-10 flex items-center justify-center rounded-full text-portfolio-blue hover:bg-portfolio-blue hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form className="bg-portfolio-gray-light p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-portfolio-gray-dark">Send Me a Message</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-portfolio-gray-dark mb-1">Name</label>
                    <Input 
                      id="name" 
                      placeholder="Your Name" 
                      className="w-full" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-portfolio-gray-dark mb-1">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-portfolio-gray-dark mb-1">Subject</label>
                  <Input 
                    id="subject" 
                    placeholder="Subject" 
                    className="w-full" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-portfolio-gray-dark mb-1">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Your Message" 
                    className="w-full min-h-[120px]" 
                  />
                </div>
                
                <Button className="w-full bg-portfolio-blue hover:bg-portfolio-blue-dark">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
