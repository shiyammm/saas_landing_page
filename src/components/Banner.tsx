import React from 'react';

const Banner = () => {
  return (
    <div className="rainbow_gradient py-3 flex items-center justify-center">
      <div className="container">
        <p className="text-black font-medium text-center">
          <span className="hidden sm:inline">
            Introducing a completely redesigned interface —{' '}
          </span>
          <a href="" className="underline underline-offset-2">
            Explore the demo
          </a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
