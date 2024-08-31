'use client';
import React, { useRef } from 'react';
import appScreen from '@/assets/images/app-screen.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProductInterface = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end end'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

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
      <motion.div
        style={{
          opacity: opacity,
          transformPerspective: '800px',
          rotateX: rotateX,
        }}
        ref={imageRef}
      >
        <Image src={appScreen} alt="app-screenshot" className="mt-14" />
      </motion.div>
    </section>
  );
};

export default ProductInterface;
