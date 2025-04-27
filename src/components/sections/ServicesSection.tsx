import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { services } from '../../data/services';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Services"
          subtitle="What We Offer"
          description="Comprehensive construction solutions tailored to meet diverse project requirements."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <ul>
                {services.map((service) => (
                  <li key={service.id}>
                    <button
                      onClick={() => setActiveService(service.id)}
                      className={`w-full text-left px-6 py-4 flex items-center justify-between transition-colors duration-200 ${
                        activeService === service.id
                          ? 'bg-blue-700 text-white'
                          : 'hover:bg-gray-100 text-gray-800'
                      }`}
                    >
                      <span className="font-medium">{service.title}</span>
                      <ChevronRight
                        className={`w-5 h-5 ${
                          activeService === service.id ? 'text-white' : 'text-gray-400'
                        }`}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-2">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-opacity duration-300 h-full ${
                  activeService === service.id ? 'block' : 'hidden'
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Our Approach:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="#contact"
                    className="inline-block bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-md font-medium transition-colors duration-300"
                  >
                    Request Service
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;