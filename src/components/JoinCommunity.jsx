"use client";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function JoinCommunity() {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <section
      style={{ marginTop: "3rem", padding: "64px 16px" }}
      className='bg-white text-center'
    >
      <h2 className='font-semibold text-sm md:text-xl lg:text-sm text-dark'>
        JOIN THE COMMUNITY
      </h2>

      <p className='text-xs text-gray-600' style={{ margin: "8px 0 0" }}>
        SIGN UP TO OUR MAILING LIST FOR EXCLUSIVE ACCESS.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "13px",
          position: "relative",
          display: "inline-block",
        }}
      >
        <input
          type='email'
          placeholder='Email'
          className='bg-[#f3f3f3] text-gray-900 text-sm placeholder-gray-500'
          style={{
            padding: "10px 48px 10px 16px",
            width: "220px",
            border: "none",
            outline: "none",
          }}
          required
        />
        <button
          type='submit'
          className='text-gray-900'
          style={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            padding: "12px 16px",
            background: "transparent",
            border: "none",
          }}
        >
          <IoIosArrowRoundForward size={23} />
        </button>
      </form>
    </section>
  );
}
