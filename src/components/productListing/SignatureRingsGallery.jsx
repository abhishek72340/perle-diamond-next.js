import Image from "next/image";
import { signatureRings } from "../../data/signatureRings";
const SignatureRingsGallery = () => {
  return (
    <ul
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
      style={{ padding: "25px" }}
    >
      {signatureRings?.map(({ id, title, images, price }) => (
        <li key={id} className='group'>
          <div className='relative overflow-hidden'>
            <Image
              src={images[0]}
              alt={`${title} front`}
              className='w-full transition-opacity duration-300 group-hover:opacity-0'
              loading="lazy"
            />
            <Image
              src={images[1]}
              alt={`${title} back`}
              className='absolute inset-0 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100'
              loading="lazy"
            />
          </div>
          <h2
            className='mt-2 font-semibold text-xs uppercase'
            style={{ marginTop: "0.5rem" }}
          >
            {title}
          </h2>
          <p className='text-gray-500 text-xs'>Rs. {price}</p>
        </li>
      ))}
    </ul>
  );
};

export default SignatureRingsGallery;
