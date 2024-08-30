import React from 'react';
import Accordion from './Accordion';

const FAQs = () => {
  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit and debit cards, including Visa, MasterCard, and American Express. We also support PayPal and other secure payment gateways.',
    },
    {
      question: 'How does the pricing work for teams?',
      answer:
        'Our team pricing is based on the number of users in your team. The more users you add, the more you save per user. You can easily upgrade or downgrade your team size as your needs change.',
    },
    {
      question: 'Can I change my plan later?',
      answer:
        'Yes, you can upgrade or downgrade your plan at any time. The changes will take effect immediately, and any differences in billing will be prorated for the remaining billing cycle.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Absolutely. We prioritize your data security and use industry-standard encryption methods to protect your information. Our platform is regularly updated to ensure compliance with the latest security standards.',
    },
  ];

  return (
    <section className="bg-[#5D2CA8] bg-gradient-to-b from-[#5D2CA8] to-black py-20 text-white px-4 sm:py-24">
      <h1 className="text-5xl sm:text-6xl text-center font-semibold">
        Frequently asked <br className="hidden md:block" /> questions
      </h1>
      <div className="mt-20 space-y-8">
        {faqs.map(({ question, answer }) => (
          <Accordion question={question} answer={answer} key={question} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
