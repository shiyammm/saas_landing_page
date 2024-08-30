import React from 'react';
import appScreen from '@/assets/images/app-screen.png';
import Image from 'next/image';

const ProductInterface = () => {
  return (
    <section className="bg-black bg-gradient-to-b from-black to-[#5D2CA8] py-20 sm:py-24 px-4 flex flex-col  items-center">
      <div className="text-center space-y-4 text-white">
        <h1 className="text-5xl font-semibold">Intuitive interface</h1>
        <p className="text-xl text-white/60 max-w-xl mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes, one
          task at a time.
        </p>
      </div>
      <div className="mt-14">
        <Image src={appScreen} alt="app-screenshot" />
      </div>
    </section>
  );
};

export default ProductInterface;
