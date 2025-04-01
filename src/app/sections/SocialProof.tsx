import React from 'react';
import { MdStar } from 'react-icons/md';

const SocialProof = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:pt-0 lg:py-16 lg:px-6 lg:scale-125'>
        <dl className='grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white'>
          <div className='flex flex-col items-center justify-center'>
            <dt className='mb-2 text-3xl md:text-4xl font-extrabold'>5.000+</dt>
            <dd className='font-light text-gray-500 dark:text-gray-400'>
              TV diperbaiki
            </dd>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <dt className='flex items-center mb-2 text-3xl md:text-4xl font-extrabold'><span>4.8/5</span><span className='mt-1 text-yellow-300'><MdStar/></span></dt>
            <dd className='font-light text-gray-500 dark:text-gray-400'>
              review pelanggan
            </dd>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <dt className='mb-2 text-3xl md:text-4xl font-extrabold'>10+</dt>
            <dd className='font-light text-gray-500 dark:text-gray-400'>
              tahun pengalaman
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default SocialProof;
