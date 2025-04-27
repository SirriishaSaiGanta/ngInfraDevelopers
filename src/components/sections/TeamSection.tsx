import SectionHeading from '../ui/SectionHeading';
import { team } from '../../data/team';
import { Linkedin, Mail } from 'lucide-react';

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Team"
          subtitle="Meet Our Experts"
          description="The skilled professionals behind our success, bringing expertise and dedication to every project."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">
          {team.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a 
                    href={member.linkedin} 
                    className="bg-blue-50 text-blue-700 p-2 rounded-full transition-colors hover:bg-blue-100"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="bg-blue-50 text-blue-700 p-2 rounded-full transition-colors hover:bg-blue-100"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;