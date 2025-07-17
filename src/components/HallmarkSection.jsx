import Image from "next/image";
import HallmarkBanner from "../../public/images/Hallmark-banner.svg";
export default function HallmarkSection() {
  return (
    <section
      className='py-12 px-4 flex flex-col justify-center items-center'
      style={{ marginTop: "6rem" }}
    >
      <div className='max-w-3xl mx-auto text-center'>
        <p className='text-base/8 md:text-2xl leading-relaxed font-medium text-gray-900 font-serif'>
          Every piece is made from 925 Sterling Silver,
          <br />
          designed in London and hallmarked at the
          <br /> Goldsmiths' Assay Office
        </p>

        <div
          className='flex justify-center items-center space-x-6 '
          style={{ marginTop: "1.5rem" }}
        >
          <Image
            src={HallmarkBanner}
            alt='Hallmark Banner'
            width={165}
            height={150}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
