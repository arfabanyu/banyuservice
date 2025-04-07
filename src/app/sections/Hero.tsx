// import { Link } from 'react-router-dom';
import hero from '~/images/generals/hero.svg';
import Image from 'next/image';
import WaLink from '@/components/WaLink';

const Hero = () => {
  return (
    <section
      id='hero'
      className='isolate bg-base-100 text-base-content grid place-content-center min-h-screen relative overflow-hidden'
    >
      <div className='h-screen w-[100vh] bg-primary -z-10 absolute -right-155 lg:-right-1/4 rounded-full top-1/2 -translate-y-1/2'></div>
      <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl'>
            <span className='block text-lg md:text-xl text-primary mb-2 md:mb-4 font-semibold'>
              Service TV Jakarta
            </span>
            TV{' '}
            <span className='bg-primary text-primary-content rounded-lg'>
              Rusak?
            </span>{' '}
            Kami Bikin Nyala Lagi!
          </h1>
          <p className='max-w-2xl font-light mb-6 lg:mb-8 md:text-lg lg:text-xl'>
            Cari <strong>service TV Jakarta</strong> terpercaya? Kami siap
            menangani berbagai{' '}
            <strong>kerusakan TV LED, LCD, dan Plasma</strong> dengan teknisi
            berpengalaman, harga jujur, layanan cepat, dan garansi nyata. TV
            Anda nggak boleh pensiun dini!
          </p>
          <WaLink />
          <a href='#problems' className='btn btn-ghost btn-lg ml-3'>
            Mulai
          </a>
        </div>
        <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
          <Image src={hero} alt='mockup' className='mx-auto' loading='lazy' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
