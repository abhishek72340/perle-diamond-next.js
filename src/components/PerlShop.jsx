import Image from "next/image";
import PerlImg from "../../public/images/perl.webp";

export default function PerlShop() {
  return (
    <section className='relative w-full'>
      <Image
        src={PerlImg}
        alt='Perle'
        layout='responsive'
        width={1600}
        height={600}
        objectFit='cover'
        loading='lazy'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-end text-center px-4 gap-4 pb-[20px]'>
        <h2 className='text-white text-2xl font-serif mb-4'>Perle</h2>
        <a className='inline-block uppercase text-white border text-xs border-white py-3 px-6'>
          Shop Now
        </a>
      </div>
    </section>
  );
}
