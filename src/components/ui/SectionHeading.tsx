interface SectionHeadingProps {
  title: string;
  subtitle: string;
  description: string;
}

const SectionHeading = ({ title, subtitle, description }: SectionHeadingProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <p className="text-blue-600 font-medium uppercase tracking-wider mb-2">{subtitle}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="w-20 h-1 bg-orange-500 mx-auto my-6"></div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default SectionHeading;