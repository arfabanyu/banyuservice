import Image from 'next/image';
import React from 'react';

const Services = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <Service>
        <Img
          src={
            'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg'
          }
        />
        <Text
          title='Service TV LED, LCD, dan tabung'
          body='Kami menangani berbagai jenis TV, dari model klasik hingga teknologi terbaru. Tim kami siap menghidupkan kembali layar favorit Anda dengan metode perbaikan yang aman dan profesional.'
        />
      </Service>
      <Service>
        <Text
          title='Ganti sparepart asli'
          body='Jangan kompromi dengan kualitas! Kami hanya menggunakan sparepart original untuk memastikan performa TV Anda tetap optimal dan tahan lama. Dengan komponen berkualitas tinggi, TV Anda kembali seperti baru.'
        />
        <Img
          src={
            'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg'
          }
        />
      </Service>
      <Service>
        <Img
          src={
            'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg'
          }
        />
        <Text
          title='Remote & power supply nggak berfungsi? Kami atasi!'
          body='Power supply bermasalah? Remote tidak responsif? Kami bisa memperbaikinya atau mengganti dengan yang lebih baik agar Anda tak perlu repot mencari pengganti sendiri.'
        />
      </Service>
      <Service>
        <Text
          title='Diagnosa cepat & konsultasi gratis'
          body='Kami memahami bahwa tidak semua orang bisa langsung tahu apa yang salah dengan TV mereka. Konsultasikan masalah Anda dengan teknisi kami, dan dapatkan diagnosa awal serta estimasi biaya secara GRATIS!'
        />
        <Img
          src={
            'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg'
          }
        />
      </Service>
    </section>
  );
};

const Img = ({ src }) => {
  return (
    <Image
      className='w-full hidden dark:block'
      src={src}
      alt='dashboard image'
      width={500}
      height={500}
    />
  );
};

const Text = ({ title = '', body = '' }) => {
  return (
    <div className='mt-4 md:mt-0'>
      <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
        {title}
      </h2>
      <p className='mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400'>
        {body}
      </p>
      <a
        href='#'
        className='inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900'
      >
        Get started
        <svg
          className='ml-2 -mr-1 w-5 h-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
      </a>
    </div>
  );
};
const Service = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
      {children}
    </div>
  );
};

export default Services;
