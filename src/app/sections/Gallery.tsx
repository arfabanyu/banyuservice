'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import one from '/images/generals/layar-flicker.webp';
import two from '/images/generals/layar-klise.webp';
import three from '/images/generals/penggantian-lampu-backlight.webp';
import four from '/images/generals/proses-perbaikan-power-supply.webp';
import five from '/images/generals/pengecekan-unit-lcd-tv-lg-redtop-hotel.webp';
import six from '/images/generals/hasil-penggantian-layar-led-tv-samsung.webp';
import seven from '/images/generals/hasil-penggantian-lampu-backlight.webp';
import eight from '/images/generals/kunjungan-service-tv-lg.webp';
import nine from '/images/generals/stock-motherboard-sharp.webp';
import ten from '/images/generals/banner-bengkel.webp';
import eleven from '/images/generals/hasil-perbaikan-layar-android-tv-sony.webp';
import twelve from '/images/generals/proses-perbaikan-layar-sony-android-tv.webp';
import thirteen from '/images/generals/perbaikan-tcl-software.webp';
import fourteen from '/images/generals/stock-motherboard-tv-samsung.webp';
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
            Dari TV mati total menjadi normal kembali! Kami telah menangani{' '}
            <strong>2.000+</strong> TV dengan tingkat kepuasan pelanggan{' '}
            <strong>4.9/5</strong> dan lebih dari <strong>10</strong> tahun
            pengalaman dalam service TV LED, LCD, dan plasma.
          </p>
        </div>
        <div
          className={`md:columns-3 overflow-hidden space-y-4 w-fit mx-auto relative transition-all ${
            isShow ? 'h-full' : 'h-150'
          }`}
        >
          {!isShow && (
            <div className='w-full absolute h-full bg-gradient-to-t from-base-100 to-30% to-transparent'></div>
          )}
          <Image
            src={one}
            alt='Kerusakan layar flicker pada TV LCD Samsung'
            className='w-96 h-fit'
            loading='lazy'
          />
          <Image
            src={two}
            alt='Kerusakan layar klise pada TV LED Samsung'
            className='w-96 h-fit'
            loading='lazy'
          />
          <Image
            src={three}
            alt='Penggantian lampu backlight oleh teknisi'
            className='w-96 h-fit'
            loading='lazy'
          />
          <Image
            src={four}
            alt='Proses perbaikan power supply'
            className='w-96 h-fit'
            loading='lazy'
          />
          <Image
            src={five}
            alt='Kunjungan pengecekan unit LCD TV LG di hotel RedTop'
            className='w-96 h-fit'
            loading='lazy'
          />
          <Image
            src={six}
            alt='Hasil penggantian layar LED TV Samsung'
            className='w-96 h-fit'
            loading='lazy'
          />
          <Image
            src={seven}
            alt='Hasil penggantian lampu backlight'
            className='w-96 h-fit'
            loading='lazy'
          />
          <Image
            src={eight}
            alt='Kunjungan service'
            className='w-96 h-fit'
            loading='lazy'
          />
          <Image
            src={nine}
            alt='Stock motherboard TV Sharp'
            className='w-96 h-fit'
            loading='lazy'
          />
          <Image
            src={ten}
            alt='Banner Bengkel Banyuservice'
            height={0}
            width={0}
            className='w-96 h-fit'
            loading='lazy'
          />
          <Image
            src={eleven}
            alt='Hasil perbaikan layar Sony Android TV'
            className='w-96 h-fit'
            loading='lazy'
          />
          <Image
            src={twelve}
            alt='Proses perbaikan layar Sony Android TV'
            className='w-96 h-fit'
            loading='lazy'
          />
          <Image
            src={thirteen}
            alt='Proses perbaikan software LED TV TCL'
            className='w-96 h-fit'
            loading='lazy'
          />
          <Image
            src={fourteen}
            alt='Stock motherboard LED TV Samsung'
            className='w-96 h-fit'
            loading='lazy'
          />
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
