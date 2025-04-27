import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../../types/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group rounded-lg overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-blue-900/60 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            className="bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md font-medium flex items-center"
            onClick={() => window.open('#', '_blank')}
          >
            View Details
            <ExternalLink className="ml-2 w-4 h-4" />
          </button>
        </div>
        <div className="absolute top-4 right-4 bg-orange-500 text-white text-sm font-medium py-1 px-3 rounded-full">
          {project.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-medium">{project.location}</span>
          <span className="text-gray-500 text-sm">{project.year}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;