"use client";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function JoinCommunity() {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <section className='bg-white text-center mt-12 py-16 px-4'>
      <h2 className='font-semibold text-sm md:text-xl lg:text-sm text-dark'>
        JOIN THE COMMUNITY
      </h2>

      <p className='text-xs text-gray-600 mt-[8px]'>
        SIGN UP TO OUR MAILING LIST FOR EXCLUSIVE ACCESS.
      </p>
      <form onSubmit={handleSubmit} className='mt-[13px] relative inline-block'>
        <input
          type='email'
          placeholder='Email'
          className='bg-[#f3f3f3] text-gray-900 text-sm placeholder-gray-500 px-[48px] pr-[48px] pl-[16px] py-[10px] w-[220px] border-none outline-none'
          required
        />
        <button
          type='submit'
          className='text-gray-900'
          className='absolute top-1/2 right-0 -translate-y-1/2 px-4 py-3 bg-transparent border-none'
        >
          <IoIosArrowRoundForward size={23} />
        </button>
      </form>
    </section>
  );
}
