export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  location: string;
  year: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  email: string;
  linkedin: string;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar: string;
}