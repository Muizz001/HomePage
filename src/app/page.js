import Image from "next/image";
import Hero from "../../components/Hero";
import TopPro from "../../components/TopPro";

export default function Home() {
  return <div className="mt-[74px]">
    <Hero />
    <TopPro />
  </div>;
}
