'use client';

import Image from 'next/image';
import React from 'react';
import acme from '@/assets/images/acme.png';
import apex from '@/assets/images/apex.png';
import celestial from '@/assets/images/celestial.png';
import pulse from '@/assets/images/pulse.png';
import quantum from '@/assets/images/quantum.png';
import echo from '@/assets/images/echo.png';
import { motion } from 'framer-motion';

const Marque = () => {
  const images = [
    { src: acme, alt: 'acme' },
    { src: apex, alt: 'apex' },
    { src: celestial, alt: 'celestial' },
    { src: pulse, alt: 'pulse' },
    { src: quantum, alt: 'quantum' },
    { src: echo, alt: 'echo' },
  ];
  return (
    <section className="bg-black py-20 sm:py-32 space-y-10">
      <h2 className="text-center text-lg sm:text-xl text-opacity-80 text-white px-4">
        Trusted by the world's most innovative teams
      </h2>
      <div className="before:content-[''] relative overflow-hidden before:h-full after:h-full after:content-[''] before:z-10 before:absolute after:absolute before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] before:w-20 after:w-20 after:right-0 before:left-0 before:top-0 after:top-0">
        <motion.div
          className="flex gap-16 flex-none pr-10"
          initial={{ translateX: 0 }}
          animate={{ translateX: '-50%' }}
          transition={{
            duration: 5,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {images.map(({ src, alt }) => (
            <Image
              src={src}
              alt={alt}
              key={alt}
              className="h-8 flex-none w-auto"
            />
          ))}
          {images.map(({ src, alt }) => (
            <Image
              src={src}
              alt={alt}
              key={alt}
              className="h-8 flex-none w-auto"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marque;
