import Image from 'next/image';
import React from 'react';
import changhong from '/logos/changhong.png'; 
import coocaa from '/logos/coocaa.png'; 
import lg from '/logos/lg.png'; 
import panasonic from '/logos/panasonic.png'; 
import polytron from '/logos/polytron.png'; 
import samsung from '/logos/samsung.png'; 
import sharp from '/logos/sharp.png'; 
import sony from '/logos/sony.png'; 
import tcl from '/logos/tcl.png'; 
import toshiba from '/logos/toshiba.png'; 
import xiaomi from '/logos/xiaomi.png'; 

const Merk = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 lg:py-16 mx-auto max-w-screen-xl px-4'>
        <h2 className='mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl'>
          Kami menangani banyak merk TV seperti
        </h2>
        <div className='grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400'>
          <Logo src={changhong} link={'/'} />
          <Logo src={coocaa} link={'/'} />
          <Logo src={lg} link={'/'} />
          <Logo src={tcl} link={'/'} />
          <Logo src={toshiba} link={'/'} />
          <Logo src={xiaomi} link={'/'} />
          <Logo src={panasonic} link={'/'} />
          <Logo src={polytron} link={'/'} />
          <Logo src={samsung} link={'/'} />
          <Logo src={sharp} link={'/'} />
          <Logo src={sony} link={'/'} />
        </div>
      </div>
    </section>
  );
};

const Logo = ({ src, link }) => {
  return (
    <a href={link} className='flex justify-center items-center'>
      <Image src={src} alt={src} width={150} height={150} />
    </a>
  );
};

export default Merk;
