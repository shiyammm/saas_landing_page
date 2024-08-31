'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import helix from '@/assets/images/helix2.png';
import emojistar from '@/assets/images/emojistar.png';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const containerRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });
  // useEffect(() => {}, []);

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      className="px-4 py-20 sm:py-24 bg-black text-white flex flex-col items-center overflow-hidden"
      ref={containerRef}
    >
      <div className="relative space-y-8">
        <div className="text-center space-y-6">
          <h2 className="text-5xl sm:text-6xl font-semibold">
            Get instant access
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mx-auto max-w-sm">
          <input
            type="email"
            placeholder="your@email.com"
            className="text-white placeholder:text-white/80 bg-[#4b4b4d] rounded-lg h-12 pl-4 flex-1 py-3"
          />
          <button className="bg-white text-black rounded-lg h-12 px-6 font-semibold text-md">
            Get access
          </button>
        </div>
        <motion.div style={{ translateY }}>
          <Image
            src={helix}
            alt="helix"
            className="absolute w-[12rem] -top-[10.5rem] -right-[14rem]"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={emojistar}
            alt="emojistar"
            className="absolute w-[12rem] -top-[18.5rem] -left-[13rem]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
