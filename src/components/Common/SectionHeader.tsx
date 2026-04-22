import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="my-8 text-center">
      <h2 className="text-4xl font-bold text-gray-100 glow-effect">{title}</h2>
      {subtitle && <p className="mt-2 text-lg text-gray-300">{subtitle}</p>}
      <hr className="my-4 border-t border-gray-600" />
    </div>
  );
};

export default SectionHeader;