import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordion: React.FC<{ faqs: FAQItem[] }> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
          </div>
          {openIndex === index && (
            <div className="faq-answer mt-2">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;