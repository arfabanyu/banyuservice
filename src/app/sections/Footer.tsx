import { IoLogoWhatsapp } from 'react-icons/io';
import {
  FaBusinessTime,
  FaFacebook,
  FaInstagram,
  FaLocationDot,
} from 'react-icons/fa6';
import { BsDot } from 'react-icons/bs';
import { GoogleMapsEmbed } from '@next/third-parties/google';

const Footer = () => {
  return (
    <>
      <footer
        id='footer'
        className='footer sm:footer-horizontal md:grid-cols-[repeat(auto-fit,_minmax(10rem,_1fr))] bg-sky-950 text-primary-content p-10'
      >
        <nav>
          <h6 className='footer-title'>Navigasi</h6>
          <Navigate to='Home' href='#hero' />
          <Navigate to='Problems' href='#problems' />
          <Navigate to='Benefits' href='#benefits' />
          <Navigate to='Services' href='#services' />
          <Navigate to='Gallery' href='#gallery' />
          <Navigate to='Testimonials' href='#testimonials' />
          <Navigate to='FAQ' href='#faq' />
          <Navigate to='Contact' href='#contact' />
        </nav>
        <nav>
          <h6 className='footer-title'>Hubungi Kami</h6>
          <li className='flex gap-2'>
            <IoLogoWhatsapp className='inline-block text-green-500' />
            <span className='w-45 text-justify'>+62 878-8770-8006</span>
          </li>
          <li className='flex gap-2'>
            <FaLocationDot className='inline-block text-red-500' />
            <span className='w-45 text-justify'>
              Jl. Z Gg. Srikaya No.37, RT.4/RW.8, Jatipulo, Kec. Palmerah, Kota
              Jakarta Barat, Daerah Khusus Ibukota Jakarta 11430
            </span>
          </li>
          <li className='flex gap-2'>
            <FaBusinessTime className='inline-block text-blue-500' />
            <div>
              <p className='w-45 text-justify'>Senin—Sabtu: 10.00—22.00</p>
              <p className='w-45 text-justify'>Minggu: 09.00—20.00</p>
            </div>
          </li>
        </nav>
        <nav>
          <h6 className='footer-title'>Kami Melayani di</h6>
          <li className='flex gap-2'>
            <BsDot className='text-base-100' />
            <p className='w-45'>
              Service TV Jakarta Barat : Palmerah, Kebon Jeruk, Kembangan
            </p>
          </li>
          <li className='flex gap-2'>
            <BsDot className='text-base-100' />
            <p className='w-45'>
              Service TV Jakarta Selatan : Kebayoran Lama, Pasar Minggu
            </p>
          </li>
          <li className='flex gap-2'>
            <BsDot className='text-base-100' />
            <p className='w-45'>
              Service TV Jakarta Timur : Jatinegara, Cakung
            </p>
          </li>
          <li className='flex gap-2'>
            <BsDot className='text-base-100' />
            <p className='w-45'>
              Service TV Jakarta Pusat : Menteng, Tanah Abang
            </p>
          </li>
          <li className='flex gap-2'>
            <BsDot className='text-base-100' />
            <p className='w-45'>
              Service TV Jakarta Utara : Kelapa Gading, Pademangan
            </p>
          </li>
        </nav>
        <nav>
          <h6 className='footer-title'>Social Media Kami</h6>
          <li className='flex gap-2'>
            <FaFacebook className='text-blue-500' />
            <a
              href='https://www.facebook.com/banyuservis'
              className='link link-hover w-45'
            >
              Banyuservice Elektronik
            </a>
          </li>
          <li className='flex gap-2'>
            <FaInstagram className='text-fuchsia-500' />
            <a
              href='https://www.facebook.com/banyuservis'
              className='link link-hover w-45'
            >
              banyuservice_elektronik
            </a>
          </li>
        </nav>
        <nav>
          <h6 className='footer-title'>Temukan Kami di Google Maps</h6>
          <GoogleMapsEmbed
            apiKey={`${process.env.NEXT_PUBLIC_API_KEY}`}
            allowfullscreen
            zoom='16'
            mode='place'
            q='-6.180701,106.809287'
            height={224}
            width={180}
          />
        </nav>
      </footer>
      <footer className='footer sm:footer-horizontal footer-center bg-sky-950 text-primary-content p-4'>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - Banyuservice. Semua hak
            dilindungi.
          </p>
        </aside>
      </footer>
    </>
  );
};
const Navigate = ({ to = '', href = '' }) => {
  return (
    <a href={href} className='link link-hover'>
      {to}
    </a>
  );
};

export default Footer;
