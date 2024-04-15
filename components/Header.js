import Image from "next/image";
import bannerImage from '/images/hbanner.png'

export default function Header() {
  return (
    <Image
    src={bannerImage}
   
    />
  );
}
