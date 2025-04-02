import React from 'react';
import { MdStar } from 'react-icons/md';

const SocialProof = () => {
  return (
    <section id='social-proof' className='bg-base-100 text-base-content'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
        <dl className='grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3'>
          <div className='flex flex-col items-center justify-center'>
            <dt className='mb-2 text-3xl md:text-5xl font-extrabold'>2.000+</dt>
            <dd className='font-light md:text-lg text-gray-500'>
              TV diperbaiki
            </dd>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <dt className='flex items-center mb-2 text-3xl md:text-5xl font-extrabold'><span>4.9/5</span><span className='mt-1 text-yellow-300'><MdStar/></span></dt>
            <dd className='font-light md:text-lg text-gray-500 '>
              review pelanggan
            </dd>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <dt className='mb-2 text-3xl md:text-5xl font-extrabold'>10+</dt>
            <dd className='font-light md:text-lg text-gray-500'>
              tahun pengalaman
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default SocialProof;
