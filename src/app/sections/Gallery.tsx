'use client';
import Image from 'next/image';
import React, { use, useState } from 'react';
import one from '/images/reviews/one.png';
import two from '/images/reviews/two.png';
import three from '/images/reviews/three.png';
import four from '/images/reviews/four.png';
import five from '/images/reviews/five.png';
import six from '/images/reviews/six.png';
import seven from '/images/reviews/seven.png';
import eight from '/images/reviews/eight.png';
import nine from '/images/reviews/nine.png';
import ten from '/images/reviews/ten.png';
import eleven from '/images/reviews/eleven.png';
import twelve from '/images/reviews/twelve.png';
import thirteen from '/images/reviews/thirteen.png';
import fourteen from '/images/reviews/fourteen.png';
const Gallery = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <section id='gallery' className='bg-base-100 text-base-content'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold'>
            <span className='bg-primary text-primary-content rounded-lg'>
              Hasil
            </span>{' '}
            Pekerjaan Kami
          </h2>
          <p className='mb-8 font-light text-gray-600 lg:mb-16 sm:text-xl'>
            Dari rusak parah jadi kembali normal! Ini dia beberapa contoh TV
            yang berhasil kami perbaiki.
          </p>
        </div>
        <div
          className={`md:columns-3 overflow-hidden space-y-4 w-fit mx-auto transition-all ${
            isShow ? 'h-full' : 'h-50'
          }`}
        >
          <Image src={one} alt='' className='w-96 h-fit' />
          <Image src={two} alt='' className='w-96 h-fit' />
          <Image src={three} alt='' className='w-96 h-fit' />
          <Image src={four} alt='' className='w-96 h-fit' />
          <Image src={five} alt='' className='w-96 h-fit' />
          <Image src={six} alt='' className='w-96 h-fit' />
          <Image src={seven} alt='' className='w-96 h-fit' />
          <Image src={eight} alt='' className='w-96 h-fit' />
          <Image src={nine} alt='' className='w-96 h-fit' />
          <Image src={ten} alt='' height={0} width={0} className='w-96 h-fit' />
          <Image src={eleven} alt='' className='w-96 h-fit' />
          <Image src={twelve} alt='' className='w-96 h-fit' />
          <Image src={thirteen} alt='' className='w-96 h-fit' />
          <Image src={fourteen} alt='' className='w-96 h-fit' />
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

export default Gallery;
