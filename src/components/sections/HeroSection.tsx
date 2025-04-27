import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Building Tomorrow's <span className="text-orange-500">Infrastructure</span> Today
          </h1>
          <p className="text-2xl text-orange-500 font-semibold mb-4">
            "Engineering Dreams into Reality"
          </p>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            N.G Infra Developers, led by Rahul Ganta, brings 12 years of civil engineering excellence and innovation to every construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md font-medium transition-colors duration-300 inline-flex items-center justify-center"
            >
              View Our Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 py-3 px-8 rounded-md font-medium transition-colors duration-300 inline-flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;