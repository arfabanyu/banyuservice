import Image, { StaticImageData } from 'next/image';
import two from '~/images/generals/layar-klise.webp';

const Problems = () => {
  return (
    <section className='bg-base-100 text-base-content'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='max-w-screen-md mb-4 lg:mb-8'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900'>
            Masalah yang Sering{' '}
            <span className='bg-primary text-primary-content rounded-lg'>
              Terjadi
            </span>{' '}
            pada TV
          </h2>
          <p className='text-gray-500 sm:text-xl'>
            Kami paham betul bagaimana frustrasinya saat TV bermasalah.
          </p>
        </div>
        <Service>
          <Img src={two} />
          <Text />
        </Service>
      </div>
    </section>
  );
};

const Img = ({ src }: { src: StaticImageData }) => {
  return (
    <Image
      className='w-full aspect-[4_/_3] object-cover'
      src={src}
      alt='Kerusakan layar klise pada TV LED Samsung'
      width={500}
      height={500}
    />
  );
};

const Text = () => {
  return (
    <div id='problems' className='scroll-m-65 mt-4 md:mt-0 relative'>
      <h2 className='mb-4 text-3xl tracking-tight font-extrabold text-gray-900'>
        Ini beberapa masalah yang{' '}
        <span className='bg-primary text-primary-content rounded-lg'>
          sering
        </span>{' '}
        kami temukan
      </h2>
      <ul className='mt-6 flex flex-col gap-2 text-xs'>
        <List problem='TV mati total, nggak ada tanda-tanda kehidupan' />
        <List problem='Gambar buram, ngeblur, atau malah hilang sama sekali' />
        <List problem='Suara lenyap, kayak film bisu' />
        <List problem='Remote ngeyel, nggak mau nurut' />
        <List problem='Layar bergaris atau ada bintik-bintik aneh' />
        <List problem='TV hidup-mati sendiri atau restart terus-menerus' />
        <List problem='Sinyal siaran jelek, channel ilang-ilangan' />
        <List problem='Layar butuh waktu lama buat nyala' />
      </ul>
    </div>
  );
};

const List = ({ problem = '' }) => {
  return (
    <li className='md:text-lg'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='size-4 md:size-6 me-2 inline-block text-success'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M5 13l4 4L19 7'
        />
      </svg>
      <span>{problem}</span>
    </li>
  );
};

const Service = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='gap-8 items-center mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2'>
      {children}
    </div>
  );
};

export default Problems;
