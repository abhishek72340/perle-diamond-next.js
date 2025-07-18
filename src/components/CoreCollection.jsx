import Image from "next/image";
import CoreCollectionImage from "../../public/images/core-collection.webp";
export default function CoreCollection() {
  return (
    <section className='relative w-full'>
      <Image
        src={CoreCollectionImage}
        alt='Core Collection'
        layout='responsive'
        objectFit='cover'
        width={1600}
        height={600}
        loading='lazy'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-end text-center gap-2 pb-[40px]'>
        <h2 className='text-black text-2xl font-medium font-serif mb-4'>
          Core Collection
        </h2>
        <a className='border border-black text-black text-xs uppercase inline-block py-[12px] px-[20px]'>
          Shop Now
        </a>
      </div>
    </section>
  );
}
