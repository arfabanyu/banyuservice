'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '~/images/logos/banyuservice.jpg';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 0 ? setScroll(true) : setScroll(false)
    );
  }, []);
  return (
    <div className='drawer z-50'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        {/* Navbar */}
        <div
          className={`navbar fixed lg:justify-between transition-all ${
            scroll && 'bg-base-100 border-b border-base-300'
          } w-full`}
        >
          <div className='flex-none lg:hidden'>
            <label
              htmlFor='my-drawer-3'
              aria-label='open sidebar'
              className='btn btn-square btn-ghost'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block h-6 w-6 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </label>
          </div>
          <div className='mx-2 flex items-center space-x-2 px-2'>
            <Image src={logo} alt='banyuservice-logo' width={32} className='inline-block' />
            <h2 className='text-2xl font-bold'>Banyuservice</h2>
          </div>
          <div className='hidden flex-none lg:block'>
            <ul className='menu menu-horizontal'>
              {/* Navbar menu content here */}
              <Navigate to='Home' href='#hero' />
              <Navigate to='Problems' href='#problems' />
              <Navigate to='Benefits' href='#benefits' />
              <Navigate to='Services' href='#services' />
              <Navigate to='Gallery' href='#gallery' />
              <Navigate to='Testimonials' href='#testimonials' />
              <Navigate to='FAQ' href='#faq' />
              <Navigate to='Contact' href='#contact' />
            </ul>
          </div>
        </div>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-3'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu bg-base-200 min-h-full w-80 p-4'>
          {/* Sidebar content here */}
          <div className='flex-none lg:hidden'>
            <label
              htmlFor='my-drawer-3'
              aria-label='open sidebar'
              className='btn btn-square btn-ghost'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block h-6 w-6 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </label>
          </div>
          <Navigate to='Home' href='#hero' />
          <Navigate to='Problems' href='#problems' />
          <Navigate to='Benefits' href='#benefits' />
          <Navigate to='Services' href='#services' />
          <Navigate to='Gallery' href='#gallery' />
          <Navigate to='Testimonials' href='#testimonials' />
          <Navigate to='FAQ' href='#faq' />
          <Navigate to='Contact' href='#contact' />
        </ul>
      </div>
    </div>
  );
};

const Navigate = ({ to = '', href = '' }) => {
  return (
    <li>
      <a href={href}>{to}</a>
    </li>
  );
};

export default Navbar;
