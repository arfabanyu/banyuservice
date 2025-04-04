import Image, { StaticImageData } from 'next/image';
import React from 'react';
import changhong from '~/images/logos/changhong.png';
import coocaa from '~/images/logos/coocaa.png';
import lg from '~/images/logos/lg.png';
import panasonic from '~/images/logos/panasonic.png';
import polytron from '~/images/logos/polytron.png';
import samsung from '~/images/logos/samsung.png';
import sharp from '~/images/logos/sharp.png';
import sony from '~/images/logos/sony.png';
import tcl from '~/images/logos/tcl.png';
import toshiba from '~/images/logos/toshiba.png';
import xiaomi from '~/images/logos/xiaomi.png';

const Merk = () => {
  return (
    <section
      id='merk'
      className='bg-base-100 text-base-content isolate relative'
    >
      <div className='h-screen w-[100vh] -z-10 absolute -left-135 lg:-left-1/4 rounded-full -top-40 bg-gradient-to-b from-base-content to-transparent opacity-5'></div>
      <div className='py-8 lg:py-16 mx-auto max-w-screen-xl px-4'>
        <h2 className='mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900  md:text-4xl'>
          Kami{' '}
          <span className='bg-primary text-primary-content rounded-lg'>
            menangani
          </span>{' '}
          banyak merk TV seperti
        </h2>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] items-center gap-8 text-gray-500 sm:gap-12'>
          <Logo src={changhong} alt='changhong-logo' />
          <Logo src={coocaa} alt='coocaa-logo' />
          <Logo src={lg} alt='lg-logo' />
          <Logo src={tcl} alt='tcl-logo' />
          <Logo src={toshiba} alt='toshiba-logo' />
          <Logo src={xiaomi} alt='xiaomi-logo' />
          <Logo src={panasonic} alt='pasasonic-logo' />
          <Logo src={polytron} alt='polytron-logo' />
          <Logo src={samsung} alt='samsung-logo' />
          <Logo src={sharp} alt='sharp-logo' />
          <Logo src={sony} alt='sony-logo' />
        </div>
      </div>
    </section>
  );
};

const Logo = ({ src, alt }: { src: StaticImageData; alt: string }) => {
  return <Image src={src} alt={alt} className='mx-auto' />;
};

export default Merk;
