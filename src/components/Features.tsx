import React from 'react';
import FeatureCards from './FeatureCards';

const Features = () => {
  return (
    <section className="bg-black min-h-screen w-full text-white flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <h3 className="text-white text-5xl font-semibold">
          Everything you need
        </h3>
        <p className="text-xl text-white text-opacity-60 mt-5 my-20">
          Enjoy customizable lists, team works tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>
      </div>
      <div className="md:flex space-y-6 md:space-y-0 gap-6 max-w-lg md:max-w-5xl">
        <FeatureCards
          heading="Integration Ecosystem"
          description="Enhance your productivity by connecting with your tools, keeping your essentials in one place."
        />
        <FeatureCards
          heading="Goal Setting and Tracking"
          description="Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
        />
        <FeatureCards
          heading="Secure Data Encryption"
          description="With end-to-end encryption, your data is securely stored and protected from unauthorized access."
        />
      </div>
    </section>
  );
};

export default Features;
