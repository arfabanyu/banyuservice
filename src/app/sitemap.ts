import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://banyuservice.com',
      lastModified: new Date(),
      priority: 1,
      images: [
        'https://banyuservice.com/images/generals/banner-bengkel.webp',
        'https://banyuservice.com/images/generals/hasil-penggantian-lampu-backlight.webp',
        'https://banyuservice.com/images/generals/hasil-penggantian-layar-led-tv-samsung.webp',
        'https://banyuservice.com/images/generals/hasil-perbaikan-layar-android-tv-sony.webp',
        'https://banyuservice.com/images/generals/kunjungan-service-tv-lg.webp',
        'https://banyuservice.com/images/generals/layar-flicker.webp',
        'https://banyuservice.com/images/generals/layar-klise.webp',
        'https://banyuservice.com/images/generals/pengecekan-unit-lcd-tv-lg-redtop-hotel.webp',
        'https://banyuservice.com/images/generals/penggantian-lampu-backlight.webp',
        'https://banyuservice.com/images/generals/perbaikan-tcl-software.webp',
        'https://banyuservice.com/images/generals/proses-perbaikan-layar-sony-android-tv.webp',
        'https://banyuservice.com/images/generals/proses-perbaikan-power-supply.webp',
        'https://banyuservice.com/images/generals/stock-motherboard-sharp.webp',
        'https://banyuservice.com/images/generals/stock-motherboard-tv-samsung.webp',
      ],
    },
  ];
}
