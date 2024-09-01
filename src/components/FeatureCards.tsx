'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { LuBox } from 'react-icons/lu';

const FeatureCards = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const offSetX = useMotionValue(-100);
  const offSetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offSetX}px ${offSetY}px, black, transparent)`;
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMousePosition = (event: MouseEvent) => {
      if (!borderRef.current) return;
      const borderRect = borderRef.current?.getBoundingClientRect();
      offSetX.set(event.x - borderRect.x);
      offSetY.set(event.y - borderRect.y);
    };

    window.addEventListener('mousemove', handleMousePosition);
    return () => {
      window.removeEventListener('mousemove', handleMousePosition);
    };
  }, [offSetX, offSetY]);

  return (
    <div className=" border border-white p-10 text-center rounded-xl border-opacity-35 space-y-3  flex flex-col items-center flex-1 relative">
      <motion.div
        className="absolute inset-0 border-2 border-purple-500 rounded-xl"
        ref={borderRef}
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      ></motion.div>
      <div className="bg-white size-16 rounded-lg flex items-center justify-center">
        <LuBox size={25} className="text-black" />
      </div>
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-md text-white text-opacity-65">{description}</p>
    </div>
  );
};

export default FeatureCards;
