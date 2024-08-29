import Banner from '@/components/Banner';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Marque from '@/components/Marque';
import Navbar from '@/components/Navbar';
import React from 'react';

const page = () => {
  return (
    <main className="w-full min-h-screen">
      <Banner />
      <Navbar />
      <Hero />
      <Marque />
      <Features />
    </main>
  );
};

export default page;
