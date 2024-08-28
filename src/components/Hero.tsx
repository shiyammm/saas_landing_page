import React from 'react';

const Hero = () => {
  return (
    <section className="bg-black text-white w-full h-screen flex items-center flex-col justify-center space-y-10 px-4">
      <div className="border border-white border-opacity-40 px-4 py-2 rounded-lg">
        <span className="rainbow_gradient-text font-medium">
          Version 2.0 is here
        </span>{' '}
        <span className="font-normal">Read More &rarr;</span>
      </div>
      <h1 className="text-7xl font-bold text-center">
        One Task <br /> at a Time
      </h1>
      <p className="text-center font-normal text-xl">
        Celebrate the joy of accomplishment with an app designed to track your
        progress, motivate your efforts, and celebrate your successes.
      </p>
      <button className="bg-white text-black px-4 py-2 rounded-lg font-medium">
        Get for free
      </button>
    </section>
  );
};

export default Hero;
