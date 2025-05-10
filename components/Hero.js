import React from "react";
import browse from "../assets/Icon/Browse icon.png";
import find from "../assets/Icon/find icon.png";
import pro from "../assets/Icon/pro icon.png";
import search from "../assets/Icon/search.png";
import location from "../assets/Icon/location icon.png";
import banner from "../assets/Images/Hero Banner.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="hero relative min-h-[551px] bg-[#FFF2F5] px-5 md:px-[146px] pt-10 md:pt-20 flex flex-col items-start">
        <div className="w-full md:w-[850px] flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-extralight leading-snug md:leading-[100%]">
            We set up your space to
            <br />
            celebrate your{" "}
            <strong className="font-semibold">Birthday Party</strong>
          </h1>
          <div className="mt-6 flex flex-row gap-3 sm:gap-6">
            <div className="flex items-center gap-2">
              <Image src={browse} alt="Browse" className="sm:w-6 w-3" />
              <p className="text-[12px] md:text-base">Browse Gallery</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={find} alt="Find" className="sm:w-6 w-3" />
              <p className="text-[12px] md:text-base">Find Inspiration</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={pro} alt="Hire" className="sm:w-6 w-3" />
              <p className="text-[12px] md:text-base">Hire Professionals</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-[7px] w-full sm:w-[284px]">
              <input
                type="text"
                className="flex-1 text-sm outline-none"
                placeholder="Search Service, Professional etc."
              />
              <Image src={search} alt="Search" width={19} />
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-[7px] w-full sm:w-[284px]">
              <input
                type="text"
                className="flex-1 text-sm outline-none"
                placeholder="Enter Location"
              />
              <Image src={location} alt="Location" width={19} />
            </div>
          </div>

          <button className="py-2 px-5 bg-[#DE3163] text-white mt-5 rounded-[7px] w-max text-sm">
            Search Professionals
          </button>
        </div>

        <Image
          src={banner}
          alt="Banner"
          className="absolute w-[90%] left-[5%] bottom-[-2.5%] lg:bottom-[-12.5%]"
        />
      </div>
    </div>
  );
};

export default Hero;
