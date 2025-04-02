import Image from 'next/image';
import logo from '/images/logos/logo.jpg';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaBusinessTime, FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <footer
        id='footer'
        className='footer sm:footer-horizontal bg-sky-950 text-primary-content p-10'
      >
        <aside>
          <Image src={logo} alt='' width={80} className='mask mask-circle' />
          <h1 className='text-4xl font-bold'>Banyuservice</h1>
        </aside>
        <nav>
          <h6 className='footer-title'>Navigasi Cepat</h6>
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
          <div className='flex gap-2'>
            <IoLogoWhatsapp className='inline-block text-green-500' />
            <span className='w-50 text-justify'>+62 878-8770-8006</span>
          </div>
          <div className='flex gap-2'>
            <FaLocationDot className='inline-block text-red-500' />
            <span className='w-50 text-justify'>
              Jl. Z Gg. Srikaya No.37, RT.4/RW.8, Jatipulo, Kec. Palmerah, Kota
              Jakarta Barat, Daerah Khusus Ibukota Jakarta 11430
            </span>
          </div>
          <div className='flex gap-2'>
            <FaBusinessTime className='inline-block text-blue-500' />
            <div>
              <p className='w-50 text-justify'>Senin—Sabtu: 10.00—22.00</p>
              <p className='w-50 text-justify'>Minggu: 09.00—20.00</p>
            </div>
          </div>
        </nav>
      </footer>
      <footer className='footer sm:footer-horizontal footer-center bg-sky-950 text-primary-content p-4'>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Banyuservice
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
{
  /* <Navigate to='Home' href='#home' />
<Navigate to='Benefit' href='#benefits' />
<Navigate to='Services' href='#services' />
<Navigate to='Testimonials' href='#testimonials' />
<Navigate to='FAQ' href='#faq' />
<Navigate to='Contact' href='#contact' /> */
}
{
  /* <li>
<p>
  <IoLogoWhatsapp className='inline-block text-green-500' />
  <span>+62 878-8770-8006</span>
</p>
</li>
<li>
<p>
  <FaLocationDot className='inline-block text-red-500' />
  <span className='max-w-50'>
    Jl. Z Gg. Srikaya No.37, RT.4/RW.8, Jatipulo, Kec.
    Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota
    Jakarta 11430
  </span>
</p>
</li> */
}
