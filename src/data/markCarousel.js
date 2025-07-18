import Image from "next/image";
import H1 from "../../public/images/mark/H1.svg";
import H2 from "../../public/images/mark/H2.svg";
import H3 from "../../public/images/mark/H3.svg";
import H4 from "../../public/images/mark/H4.svg";
import H5 from "../../public/images/mark/H5.svg";

export const marks = [
  {
    Icon: <Image src={H1} alt='H1' height={20} />,
    title: "FINENESS MARK",
    description: "The product is made from sterling silver.",
  },
  {
    Icon: <Image src={H2} alt='H2' height={30} />,
    title: "MILLESMAL FINESS MARK",
    description: "This shows the purity of the metal.",
  },
  {
    Icon: <Image src={H3} alt='H3' height={25} />,
    title: "ASSAY OFFICE MARK",
    description: "Mark of the London Assay Office.",
  },

  {
    Icon: <Image src={H5} alt='H5' height={40} />,
    title: "IMPORTER'S MARK",
    description: "Registered maker or sponsor mark.",
  },
  {
    Icon: <Image src={H4} alt='H4' height={40} />,
    title: "YEAR MARK",
    description: "The year the item was hallmarked.",
  },
];
