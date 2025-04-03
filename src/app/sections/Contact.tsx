import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section
      id='contact'
      className='bg-base-100 text-base-content grid place-content-center min-h-[50vh] isolate relative overflow-hidden'
    >
      <div className='h-[100vw] w-full -z-10 absolute left-1/2 -translate-x-1/2 rounded-full top-10 bg-gradient-to-b from-base-content to-transparent opacity-5'></div>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900'>
            <span className='bg-primary text-primary-content rounded-lg'>
              Hubungi
            </span>{' '}
            Kami Sekarang!
          </h2>
          <p className='mb-6 font-light text-gray-600 md:text-lg'>
            Jangan biarkan TV rusak mengganggu hiburan keluarga Anda. Hubungi
            kami untuk konsultasi dan penjadwalan service TV di area Jakarta dan
            sekitarnya.
          </p>
          <a
            href='https://wa.me/6287887708006?text=Halo%20admin,%20saya%20ingin%20menanyakan%20layanan%20perbaikan%20TV.%20Bisa%20dibantu?'
            className='btn btn-primary btn-lg'
          >
            Hubungi <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
