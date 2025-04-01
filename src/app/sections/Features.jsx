import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaTools } from 'react-icons/fa';
import { MdEngineering, MdPriceCheck } from 'react-icons/md';
import { PiSealCheckFill } from 'react-icons/pi';

const Features = () => {
  return (
    <section class='bg-white dark:bg-gray-900'>
      <div class='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div class='max-w-screen-md mb-8 lg:mb-16'>
          <h2 class='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Kenapa Harus Pilih Kami?
          </h2>
          <p class='text-gray-500 sm:text-xl dark:text-gray-400'>
            Teknisi berpengalaman, harga transparan, layanan cepat, dan garansi
            nyata. Kami pastikan TV Anda kembali berfungsi dengan optimal!
          </p>
        </div>
        <div class='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
          <Card
            icon={<MdEngineering />}
            title='Teknisi senior, bukan coba-coba'
            body='Kami hanya mempekerjakan teknisi yang berpengalaman, jadi Anda bisa yakin bahwa TV Anda di tangan yang tepat. Dengan keahlian bertahun-tahun, kami siap menangani segala kerusakan.'
          />
          <Card
            icon={<MdPriceCheck />}
            title='Harga jujur, nggak ada biaya ngagetin'
            body='Kami memberikan harga yang transparan dan adil. Tanpa biaya tersembunyi, tanpa kejutan. Anda tahu persis berapa yang perlu dibayar sebelum perbaikan dimulai.'
          />
          <Card
            icon={<BiSolidPhoneCall />}
            title='Panggilan ke rumah atau antar-jemput'
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

const Card = ({ icon, title = '', body = '' }) => {
  return (
    <div>
      <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
        <span className='w-5 h-5 text-2xl text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'>
          {icon}
        </span>
      </div>
      <h3 className='mb-2 text-xl font-bold dark:text-white'>{title}</h3>
      <p className='text-gray-500 dark:text-gray-400'>{body}</p>
    </div>
  );
};
export default Features;
