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
      "The quality never wanes. Continuing to offer 925 silver and high-end, quality jewellery at an alarmingly accessible price point",
    author: "Clash",
    logo: <Image src={LogoClash} alt='Clash' width={30} height={30} />,
  },
  {
    quote:
      "Serge DeNimes has blended the traditionally clear line between fine jewelry and the fast-paced environment of the trend-dominated fashion industry",
    author: "Culted",
    logo: <Image src={LogoED} alt='ED' width={70} height={30} />,
  },
  {
    quote:
      "London-based jewellery label Serge DeNimes creates animated signet rings every time",
    author: "Esquire",
    logo: <Image src={LogoEsquire} alt='Esquire' width={200} height={100} />,
  },
  {
    quote:
      "Delivering goods straight out of London, Serge has maintained a strong presence through its frequent themed collections",
    author: "Highsnobiety",
    logo: <Image src={High} alt='HIGH SNOBIETY' width={170} height={150} />,
  },
  {
    quote:
      "Dive into a world where fashion meets emotion and every piece is a journey towards self-expression",
    author: "Fault",
    logo: <Image src={LogoFNG} alt='Fault' width={50} height={30} />,
  },
  {
    quote:
      "Serge DeNimes is the trend-centric brand that’s revolutionising the landscape of affordable jewellry",
    author: "GQ",
    logo: <Image src={LogoGQ} alt='GQ' width={50} height={30} />,
  },
];
