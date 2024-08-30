import Banner from '@/components/Banner';
import Contact from '@/components/Contact';
import FAQs from '@/components/FAQs';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Marque from '@/components/Marque';
import Navbar from '@/components/Navbar';
import ProductInterface from '@/components/ProductInterface';
import React from 'react';

const page = () => {
  return (
    <main className="w-full min-h-screen">
      <Banner />
      <Navbar />
      <Hero />
      <Marque />
      <Features />
      <ProductInterface />
      <FAQs />
      <Contact />
      <Footer />
    </main>
  );
};

export default page;
