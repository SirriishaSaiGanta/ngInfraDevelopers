import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Client Testimonials"
          subtitle="What Our Clients Say"
          description="Hear from satisfied clients about their experience working with NG Infra Developers."
        />

        <div className="mt-16 max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4">
            <Quote className="w-20 h-20 text-blue-100" />
          </div>

          {/* Testimonials Carousel */}
          <div className="relative overflow-hidden py-8">
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="text-center">
                      <p className="text-lg md:text-xl text-gray-600 italic mb-8">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-blue-600">{testimonial.title}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-800 hover:text-blue-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-800 hover:text-blue-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;