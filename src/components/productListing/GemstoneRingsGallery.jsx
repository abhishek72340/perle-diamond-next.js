import Image from "next/image";
import { gemstoneRings } from "../../data/gemstoneRings";
const GemstoneRingsGallery = () => (
  <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-[25px]'>
    {gemstoneRings?.map(({ id, title, price, images }) => (
      <li key={id} className='group'>
        <div className='relative overflow-hidden cursor-pointer position-relative'>
          <Image
            src={images[0]}
            alt={`${title} view 1`}
            className='w-full transition-opacity duration-300 ease-in-out group-hover:opacity-0'
            loading='lazy'
          />
          <Image
            src={images[1]}
            alt={`${title} view 2`}
            className='absolute inset-0 w-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'
            loading='lazy'
          />
          <span className='absolute top-2 left-2 bg-black bg-opacity-60 text-white text-[9px] uppercase  pointer-events-none rounded-xs py-[2px] px-[5px]'>
            PERLE
          </span>
        </div>
        <h2 className='font-semibold text-xs uppercase mt-[0.5rem]'>{title}</h2>
        <p className='text-gray-500 text-xs'>Rs. {price}</p>
      </li>
    ))}
  </ul>
);

export default GemstoneRingsGallery;
