import React from 'react';

const Faq = () => {
  return (
    <section
      id='faq'
      className='bg-base-100 text-base-content isolate relative'
    >
      <div className='h-screen w-[100vh] -z-10 absolute -left-135 lg:-left-1/4 rounded-full top-1/2 -translate-y-1/2 bg-gradient-to-b from-base-content to-transparent opacity-5'></div>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <h2 className='mb-8 text-4xl tracking-tight font-extrabold'>
          Paling sering{' '}
          <span className='bg-primary text-primary-content rounded-lg'>
            ditanya
          </span>{' '}
          pelanggan
        </h2>

        <div className='join join-vertical w-full'>
          <Question
            title='Berapa lama waktu perbaikan?'
            answer='Umumnya 1-2 jam, tergantung tingkat kerusakan dan ketersediaan sparepart. Kami akan memberi tahu Anda jika ada keterlambatan.'
            defaultChecked={true}
          />
          <Question
            title='Bagaimana jika TV rusak lagi setelah diperbaiki?'
            answer='Kami memberikan garansi 1 bulan untuk layanan kami. Jika masalah yang sama muncul kembali dalam masa garansi, perbaikan ulang tidak dikenakan biaya.'
          />
          <Question
            title='Apakah bisa service TV yang sudah sangat lama?'
            answer='Bisa! Kami menerima servis TV model lama, tetapi ketersediaan sparepart tergantung jenis dan mereknya. Kami akan memberi tahu jika ada kendala dalam pengadaan komponen.'
          />
          <Question
            title='Apakah bisa bayar setelah TV diperbaiki?'
            answer='Bisa! Pembayaran dilakukan setelah perbaikan selesai dan TV kembali berfungsi dengan baik. Kami menerima pembayaran tunai dan transfer bank.'
          />
        </div>
      </div>
    </section>
  );
};

const Question = ({ title = '', answer = '', defaultChecked = false }) => {
  return (
    <div className='collapse collapse-arrow join-item'>
      <input
        type='radio'
        name='my-accordion-4'
        defaultChecked={defaultChecked}
      />
      <div className='collapse-title font-semibold'>{title}</div>
      <div className='collapse-content text-sm'>{answer}</div>
    </div>
  );
};

export default Faq;
