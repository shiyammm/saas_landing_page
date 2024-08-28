import Banner from '@/components/Banner';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import React from 'react';

const page = () => {
  return (
    <main className="w-full min-h-screen">
      <Banner />
      <Navbar />
      <Hero />
    </main>
  );
};

export default page;
