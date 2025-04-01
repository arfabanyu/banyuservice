import React from 'react';

const Contact = () => {
  return (
    <section className='bg-white grid place-content-center min-h-[50vh] dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white'>
          Hubungi Kami Sekarang!
          </h2>
          <p className='mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg'>
          Hubungi kami langsung untuk konsultasi gratis dan penjadwalan perbaikan.
          </p>
          <a
            href='#'
            className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
          >
            Hubungi
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
