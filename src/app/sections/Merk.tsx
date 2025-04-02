import Image from 'next/image';
import React from 'react';
import changhong from '/images/logos/changhong.png';
import coocaa from '/images/logos/coocaa.png';
import lg from '/images/logos/lg.png';
import panasonic from '/images/logos/panasonic.png';
import polytron from '/images/logos/polytron.png';
import samsung from '/images/logos/samsung.png';
import sharp from '/images/logos/sharp.png';
import sony from '/images/logos/sony.png';
import tcl from '/images/logos/tcl.png';
import toshiba from '/images/logos/toshiba.png';
import xiaomi from '/images/logos/xiaomi.png';

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
          <Logo src={changhong} />
          <Logo src={coocaa} />
          <Logo src={lg} />
          <Logo src={tcl} />
          <Logo src={toshiba} />
          <Logo src={xiaomi} />
          <Logo src={panasonic} />
          <Logo src={polytron} />
          <Logo src={samsung} />
          <Logo src={sharp} />
          <Logo src={sony} />
        </div>
      </div>
    </section>
  );
};

const Logo = ({ src }) => {
  return <Image src={src} alt={src}  className='mx-auto' />;
};

export default Merk;
