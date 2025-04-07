import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import one from '~/images/generals/layar-flicker.webp';
import nine from '~/images/generals/stock-motherboard-sharp.webp';
import three from '~/images/generals/penggantian-lampu-backlight.webp';
import eleven from '~/images/generals/hasil-perbaikan-layar-android-tv-sony.webp';

const Services = () => {
  return (
    <section
      id='services'
      className='scroll-m-10 bg-base-100 text-base-content overflow-hidden'
    >
      <Service>
        <Img src={one} alt='Kerusakan layar flicker pada TV LCD Samsung' />
        <Text
          title={
            <span>
              <span className='bg-primary text-primary-content rounded-lg'>
                Service
              </span>{' '}
              TV LED, LCD, dan Plasma
            </span>
          }
          body='Kami menyediakan jasa service TV LED, LCD, dan Plasma untuk berbagai merek, dari model klasik hingga teknologi terbaru. Tim kami siap menghidupkan kembali layar favorit Anda dengan metode perbaikan yang aman dan profesional.'
          visualKey={1}
        />
      </Service>
      <Service className=''>
        <Text
          title={
            <span>
              <span className='bg-primary text-primary-content rounded-lg'>
                Ganti
              </span>{' '}
              sparepart asli
            </span>
          }
          body='Jangan kompromi dengan kualitas! Kami hanya menggunakan sparepart original untuk memastikan performa TV Anda tetap optimal dan tahan lama. Dengan komponen berkualitas tinggi, TV Anda kembali seperti baru.'
          visualKey={2}
          className='order-1 md:-order-1'
        />
        <Img src={nine} alt='Stock motherboard TV Sharp' />
      </Service>
      <Service>
        <Img src={three} alt='Penggantian lampu backlight oleh teknisi' />
        <Text
          title={
            <span>
              Remote & power supply nggak{' '}
              <span className='bg-primary text-primary-content rounded-lg'>
                berfungsi?
              </span>{' '}
              Kami atasi!
            </span>
          }
          body='Power supply bermasalah? Remote tidak responsif? Kami bisa memperbaikinya atau mengganti dengan yang lebih baik agar Anda tak perlu repot mencari pengganti sendiri.'
          visualKey={3}
        />
      </Service>
      <Service>
        <Text
          title={
            <span>
              <span className='bg-primary text-primary-content rounded-lg'>
                Diagnosa
              </span>{' '}
              cepat & konsultasi mudah
            </span>
          }
          body='Kami memahami bahwa tidak semua orang bisa langsung tahu apa yang salah dengan TV mereka. Kami siap membantu menganalisis masalah TV Anda dengan cepat. Hubungi teknisi kami untuk mendapatkan diagnosa awal dan estimasi biaya sebelum perbaikan dilakukan!'
          visualKey={4}
          className='order-1 md:-order-1'
        />
        <Img src={eleven} alt='Hasil perbaikan layar Sony Android TV' />
      </Service>
    </section>
  );
};

const Img = ({ src, alt }: { src: StaticImageData; alt: string }) => {
  return (
    <Image
      className='w-full aspect-[4_/_3] object-cover~'
      src={src}
      alt={alt}
      width={500}
      height={500}
      loading='lazy'
    />
  );
};

const Text = ({
  title,
  body,
  visualKey,
  className,
}: {
  title: React.ReactNode;
  body: string;
  visualKey: number;
  className?: string;
}) => {
  return (
    <div className={`mt-4 md:mt-0 relative ${className}`}>
      <span className='text-[400px] opacity-5 bg-gradient-to-b from-black to-transparent bg-clip-text text-transparent leading-none font-bold absolute top-0 lg:-top-28 left-2/3'>
        {visualKey}
      </span>
      <h2 className='mb-4 text-4xl tracking-tight font-extrabold '>{title}</h2>
      <p className='mb-6 font-light text-gray-600 md:text-lg'>{body}</p>
      <a
        href='https://wa.me/6287887708006?text=Halo%20admin,%20saya%20ingin%20menanyakan%20layanan%20perbaikan%20TV.%20Bisa%20dibantu?'
        className='btn btn-primary'
      >
        Hubungi <FaArrowRight />
      </a>
    </div>
  );
};
const Service = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 grid md:grid-cols-2 sm:py-16 lg:px-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Services;
