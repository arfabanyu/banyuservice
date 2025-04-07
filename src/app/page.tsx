import Hero from '@/app/sections/Hero';
import Merk from './sections/Merk';
import SocialProof from './sections/SocialProof';
import Testimonials from './sections/Testimonials';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Benefits from './sections/Benefits';
import Faq from './sections/Faq';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Problems from './sections/Problems';
import Gallery from './sections/Gallery';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Problems />
      <Benefits />
      <Services />
      <Gallery />
      <Merk />
      <SocialProof />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
