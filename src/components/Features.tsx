import React from 'react';
import FeatureCards from './FeatureCards';

const Features = () => {
  const features = [
    {
      title: 'Integration Ecosystem',
      description:
        'Enhance your productivity by connecting with your tools, keeping your essentials in one place.',
    },
    {
      title: 'Goal Setting and Tracking',
      description:
        'Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.',
    },
    {
      title: 'Secure Data Encryption',
      description:
        'With end-to-end encryption, your data is securely stored and protected from unauthorized access.',
    },
  ];

  return (
    <section className="bg-black min-h-screen w-full text-white flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-xl md:max-w-3xl mx-auto">
        <h3 className="text-white text-5xl font-semibold tracking-tighter">
          Everything you need
        </h3>
        <p className="text-xl text-white text-opacity-60 mt-5 my-20">
          Enjoy customizable lists, team works tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>
      </div>
      <div className="md:flex space-y-6 md:space-y-0 gap-6 max-w-lg md:max-w-5xl">
        {features.map(({ title, description }) => (
          <FeatureCards title={title} description={description} key={title} />
        ))}
      </div>
    </section>
  );
};

export default Features;
