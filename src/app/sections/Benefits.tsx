import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaTools } from 'react-icons/fa';
import { MdEngineering, MdPriceCheck } from 'react-icons/md';
import { PiSealCheckFill } from 'react-icons/pi';

const Benefits = () => {
  return (
    <section
      id='benefits'
      className='scroll-m-20 bg-base-100 text-base-content isolate relative overflow-y-auto overflow-x-hidden'
    >
      <div className='h-screen w-[100vh] -z-10 absolute -right-135 lg:-right-1/4 rounded-full top-1/2 -translate-y-1/2 bg-gradient-to-b from-base-content to-transparent opacity-5'></div>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='max-w-screen-md mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900'>
            <span className='bg-primary text-primary-content rounded-lg'>
              Kenapa
            </span>{' '}
            Harus Pilih Kami?
          </h2>
          <p className='text-gray-500 sm:text-xl'>
            Teknisi berpengalaman, harga transparan, layanan cepat, dan garansi
            nyata. Kami pastikan TV Anda kembali berfungsi dengan optimal!
          </p>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
          <Card
            icon={<MdEngineering />}
            title='Teknisi senior & berpengalaman'
            body='Kami hanya mempekerjakan teknisi berpengalaman yang ahli di bidang perbaikan TV LED, LCD, dan plasma, jadi Anda bisa yakin bahwa TV Anda di tangan yang tepat. Dengan keahlian bertahun-tahun, kami siap menangani segala kerusakan.'
          />
          <Card
            icon={<MdPriceCheck />}
            title='Harga jujur & transparan'
            body='Kami memberikan harga yang transparan dan adil. Tanpa biaya tersembunyi, tanpa kejutan. Anda tahu persis berapa yang perlu dibayar sebelum perbaikan dimulai.'
          />
          <Card
            icon={<BiSolidPhoneCall />}
            title='Panggilan ke rumah & antar-jemput'
            body='Kami tahu Anda sibuk, jadi kami memudahkan Anda dengan layanan antar-jemput atau panggilan langsung ke rumah. Tidak perlu repot datang ke tempat kami.'
          />
          <Card
            icon={<PiSealCheckFill />}
            title='Garansi beneran, bukan sekadar janji'
            body='Kami menawarkan garansi atas layanan dan sparepart yang kami pasang. Jadi, jika ada masalah dalam waktu garansi, kami siap perbaiki tanpa biaya tambahan.'
          />
          <Card
            icon={<FaTools />}
            title='Sparepart berkualitas, bukan abal-abal'
            body='Kami hanya menggunakan sparepart asli dan berkualitas tinggi. Anda bisa tenang, karena TV Anda akan kembali bekerja seperti baru dengan komponen yang tahan lama.'
          />
        </div>
      </div>
    </section>
  );
};

const Card = ({
  icon,
  title = '',
  body = '',
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) => {
  return (
    <div>
      <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary lg:h-12 lg:w-12'>
        <span className='text-xl md:text-2xl text-primary-content'>{icon}</span>
      </div>
      <h3 className='mb-2 text-xl font-bold'>{title}</h3>
      <p className='text-gray-500 relative'>{body}</p>
    </div>
  );
};
export default Benefits;
