import Image from "next/image";
import Banner from "../../public/images/banner.webp";
export default function HeroBannerContent() {
  return (
    <section className='absolute top-0 w-full h-screen'>
      <Image
        src={Banner}
        alt='Banner'
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      <div className='absolute inset-0 flex flex-col items-center justify-end text-center px-4 gap-5 pb-[30px]'>
        <h2 className='text-white text-2xl font-serif mb-6'>Modern Rodeo</h2>
        <a className='inline-block uppercase text-xs border py-[12px] px-[25px] border-white text-white transition hover:bg-white hover:text-black'>
          Shop the Collection
        </a>
      </div>
    </section>
  );
}
