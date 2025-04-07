'use client';
import { sendGAEvent } from '@next/third-parties/google';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const WaLink = () => {
  return (
    <a
      href='https://wa.me/6287887708006?text=Halo%20admin,%20saya%20ingin%20menanyakan%20layanan%20perbaikan%20TV.%20Bisa%20dibantu?'
      className='btn btn-primary btn-lg'
      onClick={() =>
        sendGAEvent('event', 'Whatsapp', { value: 'tombol wa diklik' })
      }
    >
      Hubungi <FaArrowRight />
    </a>
  );
};

export default WaLink;
