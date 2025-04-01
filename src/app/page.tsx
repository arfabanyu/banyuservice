'use client';
import { useEffect, useState } from 'react';
import Hero from '@/app/sections/Hero';
import Merk from './sections/Merk';
import SocialProof from './sections/SocialProof';
import Testimonials from './sections/Testimonials';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Features from './sections/Features';
import Faq from './sections/Faq';
import Services from './sections/Services';
import Contact from './sections/Contact';

export default function Home() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 0 ? setScroll(true) : setScroll(false)
    );
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <Merk />
      <Features />
      <Services />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
