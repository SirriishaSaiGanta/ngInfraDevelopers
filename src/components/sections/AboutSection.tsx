import { Building2, Users, Award, Calendar } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const AboutSection = () => {
  const stats = [
    {
      icon: <Building2 className="w-6 h-6 text-orange-500" />,
      value: "50+",
      label: "Projects Completed",
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      value: "35+",
      label: "Team Members",
    },
    {
      icon: <Award className="w-6 h-6 text-orange-500" />,
      value: "15+",
      label: "Awards Received",
    },
    {
      icon: <Calendar className="w-6 h-6 text-orange-500" />,
      value: "12+",
      label: "Years Experience",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="About N.G Infra Developers"
          subtitle="Who We Are"
          description="Learn about our journey, mission, and the values that drive our success in the construction industry."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="NG Infra Developers Team"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 md:p-6 rounded-lg shadow-lg">
              <p className="text-lg md:text-xl font-bold">Founded in 2024</p>
              <p className="text-sm md:text-base">Engineering Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2024 by Rahul Ganta, a B.Tech qualified Civil Engineer
              with 12 years of industry experience, N.G Infra Developers emerged
              from a passion to transform the construction landscape with
              innovative approaches and sustainable practices.
            </p>
            <p className="text-gray-600 mb-8">
              We specialize in residential, commercial, and infrastructure
              projects, consistently delivering exceptional quality within
              timeline and budget constraints. Our commitment to excellence and
              Mr. Ganta's extensive expertise has quickly established us as a
              trusted name in the construction industry.
            </p>

            {/* Company Values */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Quality",
                  description: "Unwavering commitment to superior standards",
                },
                {
                  title: "Integrity",
                  description: "Honest and ethical business practices",
                },
                {
                  title: "Innovation",
                  description: "Embracing new technologies and methods",
                },
                {
                  title: "Sustainability",
                  description: "Environmentally responsible construction",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-700"
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg shadow-sm text-center transform transition-transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h4 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h4>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
