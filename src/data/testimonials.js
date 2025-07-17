import Image from "next/image";
import LogoGQ from "../../public/images/testimonial/gq.svg";
import LogoFNG from "../../public/images/testimonial/fng.svg";
import LogoClash from "../../public/images/testimonial/clash.svg";
import LogoED from "../../public/images/testimonial/ed.svg";
import LogoEsquire from "../../public/images/testimonial/esquire.svg";
import High from "../../public/images/testimonial/high.svg";

export const testimonials = [
  {
    quote:
      "Serge DeNimes is the trend-centric brand that's revolutionising the landscape of affordable jewellery",
    author: "GQ",
    logo: <Image src={LogoGQ} alt='GQ' width={50} height={30} />,
  },
  {
    quote:
      "The quality never wanes. Continuing to offer 925 silver and high-end, quality jewellery at an alarmingly accessible price point.",
    author: "Clash",
    logo: <Image src={LogoClash} alt='Clash' width={30} height={30} />,
  },
  {
    quote: "Unrivalled craftsmanship meets forward-thinking design.",
    author: "Esquire",
    logo: <Image src={LogoEsquire} alt='Esquire' width={200} height={100} />,
  },
  {
    quote: "A sublime marriage of tradition & modernity in silver.",
    author: "Fault",
    logo: <Image src={LogoFNG} alt='Fault' width={50} height={30} />,
  },
  {
    quote:
      "Delivering goods straight out of London, Serge has maintained a strong presence through its frequent themed collections",
    author: "HIGH SNOBIETY",
    logo: <Image src={High} alt='HIGH SNOBIETY' width={170} height={150} />,
  },
  {
    quote: "Bold statements carved in shining metal—always on point.",
    author: "ED",
    logo: <Image src={LogoED} alt='ED' width={70} height={30} />,
  },
];
