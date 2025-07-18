import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      className='w-full bg-[#f3f3f3] border-t border-[#c7c7c7] h-110 p-[5%]'
    >
      {/* top “columns” row */}
      <div className='text-[black] w-full px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-x-10 gap-y-6'>
        {/* ABOUT US */}
        <div className='flex flex-col  gap-4 '>
          <h6 className='text-xs font-semibold uppercase mb-4'>ABOUT US</h6>
          <ul className='flex flex-col gap-4 font-medium'>
            <li className='text-xs cursor-pointer transition-colors '>
              About Us
            </li>
            <li className='text-xs cursor-pointer transition-colors'>
              Hallmarking
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div className='flex flex-col gap-4'>
          <h4 className='text-xs font-semibold uppercase mb-4'>LEGAL</h4>
          <ul className='flex flex-col gap-4 font-medium'>
            <li className='text-xs cursor-pointer transition-colors'>
              Terms & Conditions
            </li>
            <li className='text-xs cursor-pointer transition-colors'>
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* INFORMATION */}
        <div className='flex flex-col gap-4'>
          <h4 className='text-xs font-semibold uppercase mb-4'>INFORMATION</h4>
          <ul className='flex flex-col gap-4 font-medium'>
            <li className='text-xs cursor-pointer transition-colors'>
              Delivery
            </li>
            <li className='text-xs cursor-pointer transition-colors'>
              Returns
            </li>
            <li className='text-xs cursor-pointer transition-colors'>
              Product Search
            </li>
          </ul>
        </div>

        {/* CUSTOMER SERVICES */}
        <div className='flex flex-col gap-4'>
          <h4 className='text-xs font-semibold uppercase mb-4'>
            CUSTOMER SERVICES
          </h4>
          <ul className='flex flex-col gap-4 font-medium'>
            <li className='text-xs cursor-pointer transition-colors'>
              Care Guide
            </li>
            <li className='text-xs cursor-pointer transition-colors'>
              Size Guide
            </li>
            <li className='text-xs cursor-pointer transition-colors'>
              Student Discount
            </li>
            <li className='text-xs cursor-pointer transition-colors'>
              Help Centre
            </li>
            <li className='text-xs cursor-pointer transition-colors'>
              Track Your Order
            </li>
          </ul>
        </div>

        {/* STOCKISTS */}
        <div className='flex flex-col gap-4'>
          <h4 className='text-xs font-semibold uppercase mb-4'>STOCKISTS</h4>
          <ul className='flex flex-col gap-4 font-medium'>
            <li className='text-xs cursor-pointer transition-colors'>
              View Stockists
            </li>
          </ul>
        </div>

        {/* SOCIAL ICONS */}
        <div className='flex items-start justify-end gap-3'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='cursor-pointer transition-colors'
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='cursor-pointer transition-colors'
          >
            <FaInstagram size={16} />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='cursor-pointer transition-colors'
          >
            <FaTwitter size={16} />
          </a>
          <a
            href='https://tiktok.com'
            target='_blank'
            rel='noopener noreferrer'
            className='cursor-pointer transition-colors'
          >
            <SiTiktok size={16} />
          </a>
        </div>
      </div>

      {/* bottom copyright row */}
      <div className='w-full px-8 pb-6 text-xs font-medium text-dark my-[5rem]'>
        ©2025 Serge DeNimes. All Rights Reserved.
      </div>
    </footer>
  );
}
