import Image from "next/image";
import Hero from "../../components/Hero";
import TopPro from "../../components/TopPro";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "../../components/Testimonial";


export default function Home() {
  return <div className="mt-[74px]">
    <Hero />
    <TopPro />
    <Testimonial />
  </div>;
}
