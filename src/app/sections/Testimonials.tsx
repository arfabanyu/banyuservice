'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import one from '/images/reviews/one.webp';
import two from '/images/reviews/two.webp';
import three from '/images/reviews/three.webp';
import four from '/images/reviews/four.webp';
import five from '/images/reviews/five.webp';
import six from '/images/reviews/six.webp';
import seven from '/images/reviews/seven.webp';
import eight from '/images/reviews/eight.webp';
import nine from '/images/reviews/nine.webp';
import ten from '/images/reviews/ten.webp';
import eleven from '/images/reviews/eleven.webp';
import twelve from '/images/reviews/twelve.webp';
import thirteen from '/images/reviews/thirteen.webp';
import fourteen from '/images/reviews/fourteen.webp';
const Testimonials = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <section
      id='testimonials'
      className='bg-base-100 text-base-content isolate relative overflow-hidden'
    >
      <div className='h-screen w-[100vh] -z-10 absolute -right-135 lg:-right-1/4 rounded-full top-0 bg-gradient-to-b from-base-content to-transparent opacity-5'></div>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold'>
            <span className='bg-primary text-primary-content rounded-lg'>
              Apa
            </span>{' '}
            Kata Pelanggan Kami?
          </h2>
          <p className='mb-8 font-light text-gray-600 lg:mb-16 sm:text-xl'>
            Dengar Langsung dari Mereka yang Sudah Merasakan Manfaatnya!
          </p>
        </div>
        <div
          className={`md:columns-3 overflow-hidden relative space-y-4 w-fit mx-auto transition-all ${
            isShow ? 'h-full' : 'h-130'
          }`}
        >
          {!isShow && (
            <div className='w-full absolute h-full bg-gradient-to-t from-base-100 to-50% to-transparent'></div>
          )}
          <Image src={one} alt='' className='w-96 h-fit' loading='lazy' />
          <Image src={two} alt='' className='w-96 h-fit' loading='lazy' />
          <Image src={three} alt='' className='w-96 h-fit' loading='lazy' />
          <Image src={four} alt='' className='w-96 h-fit' loading='lazy' />
          <Image src={five} alt='' className='w-96 h-fit' loading='lazy' />
          <Image src={six} alt='' className='w-96 h-fit' loading='lazy' />
          <Image src={seven} alt='' className='w-96 h-fit' loading='lazy' />
          <Image src={eight} alt='' className='w-96 h-fit' loading='lazy' />
          <Image src={nine} alt='' className='w-96 h-fit' loading='lazy' />
          <Image
            src={ten}
            alt=''
            height={0}
            width={0}
            className='w-96 h-fit'
            loading='lazy'
          />
          <Image src={eleven} alt='' className='w-96 h-fit' loading='lazy' />
          <Image src={twelve} alt='' className='w-96 h-fit' loading='lazy' />
          <Image src={thirteen} alt='' className='w-96 h-fit' loading='lazy' />
          <Image src={fourteen} alt='' className='w-96 h-fit' loading='lazy' />
        </div>
        <div className='space-x-2'>
          <button onClick={handleShow} className='btn btn-outline'>
            {isShow ? 'Lebih sedikit...' : 'Lebih banyak...'}
          </button>
          <a
            href='https://www.google.com/maps/place/Banyu+Service+LED+Tv/@-6.1807473,106.8090553,20.25z/data=!4m8!3m7!1s0x2e69f7cd4213d9cb:0xb40d2b38ec5829e4!8m2!3d-6.1807119!4d106.8092812!9m1!1b1!16s%2Fg%2F11tx0zsqtr?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D'
            className='btn btn-ghost'
          >
            Lihat semua
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
