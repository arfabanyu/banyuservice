import React from 'react';

const Faq = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <h2 className='mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
          Frequently asked questions
        </h2>

        <div className='join join-vertical w-full'>
          <Question
            title='Berapa lama waktu perbaikan?'
            answer='Umumnya 1-3 hari kerja, tergantung tingkat kerusakan dan ketersediaan sparepart. Kami akan memberi tahu Anda jika ada keterlambatan.'
            defaultChecked={true}
          />
          <Question
            title='Apakah ada biaya pengecekan?'
            answer='Gratis jika Anda melanjutkan perbaikan. Jika tidak, hanya dikenakan biaya transportasi (jika servis di rumah).'
          />
          <Question
            title='Bagaimana jika TV rusak lagi setelah diperbaiki?'
            answer='Kami memberikan garansi X bulan untuk layanan kami. Jika masalah yang sama muncul kembali dalam masa garansi, perbaikan ulang tidak dikenakan biaya.'
          />
          <Question
            title='Apakah bisa servis TV yang sudah sangat lama?'
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
    <div className='collapse collapse-arrow join-item border-base-300 border'>
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
