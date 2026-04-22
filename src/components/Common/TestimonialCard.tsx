import React from 'react';

interface Testimonial {
  name: string;
  message: string;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
      <h3 className="text-lg font-semibold text-gold">{testimonial.name}</h3>
      <p className="text-gray-300 italic">"{testimonial.message}"</p>
    </div>
  );
};

export default TestimonialCard;