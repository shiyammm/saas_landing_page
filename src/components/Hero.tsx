import React from 'react';
import cursor from '@/assets/images/cursor.png';
import message from '@/assets/images/message.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="text-white w-full py-[72px] sm:py-24 flex justify-center hero_gradient relative overflow-hidden">
      <div className="bg-black absolute w-[750px] h-[375px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1100px]  rounded-[100%] top-[calc(100%-96px)] sm:top-[calc(100%-116px)] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)]"></div>
      <div className="relative ">
        <div className="flex flex-col items-center space-y-10">
          <a
            href="#"
            className="border border-white border-opacity-40 px-4 py-2 rounded-lg"
          >
            <span className="rainbow_gradient-text font-medium">
              Version 2.0 is here
            </span>{' '}
            <span className="font-normal">Read More &rarr;</span>
          </a>
          <div className="relative">
            <h1 className="text-7xl sm:text-9xl font-bold text-center tracking-tighter">
              One Task <br /> at a Time
            </h1>
            <Image
              src={cursor}
              width={100}
              height={100}
              alt="cursor-icon"
              className="absolute top-36 -left-32 w-[10rem] sm:inline hidden"
            />
            <Image
              src={message}
              width={100}
              height={100}
              alt="message-icon"
              className="absolute top-20 w-[10rem] -right-36 sm:inline hidden"
            />
          </div>
          <p className="text-center font-normal text-xl sm:text-2xl max-w-md sm:max-w-xl ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
