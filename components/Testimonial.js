"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";


const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-pink-50 py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        What Our Customers Are Saying
      </h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {[1,2,3,4,5,6].map((t) => (
            <div
              key={t}
              className="bg-white shadow-md rounded-md p-6 text-left flex flex-col justify-between h-full mx-2"
            >
              <p className="text-gray-700 text-sm mb-6">“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”`,
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://picsum.photos/24/24"
                  alt={"Picture"}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold text-sm text-[#DE3163]">Judith Lamar</p>
                  <p className="text-sm text-gray-600">Managing Director</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
