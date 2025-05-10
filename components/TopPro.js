import React from "react";
import Card from "./Card";

const items = [
  "Birthday Special Decors",
  "Candlelight Dinners",
  "Birthday Cakes",
  "Birthday Surprises",
  "Couple Activities",
  "Birthday Special Decors",
  "Candlelight Dinners",
  "Birthday Cakes",
  "Birthday Surprises",
  "Couple Activities",
  "Birthday Special Decors",
  "Candlelight Dinners",
  "Birthday Cakes",
  "Birthday Surprises",
];

const data = await fetch('https://tenders.guru/api/pl/tenders')
const posts = await data.json()
const info = posts.data.slice(0, 6)

const TopPro = () => {
  return (
    <section className="mt-10 sm:mt-[123px] px-4 sm:px-[30px]">
      <h2 className="text-[18px] sm:text-[20px] mb-5 sm:ml-[294px] text-center sm:text-left">
        Top professionals for Birthday Decorations
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 md:flex-col md:gap-[15px] w-full md:w-[227px]">
          {items.map((item) => (
            <button
              key={item}
              className="py-2 px-5 bg-white text-[#8E44AD] rounded-[7px] w-max border border-[#8E44AD] hover:bg-[#8E44AD] hover:text-white transition-all"
            >
              {item}
            </button>
          ))}
          <button className="py-2 px-5 bg-[#8E44AD66] text-[#8E44AD] rounded-[7px] w-max border border-[#8E44AD]">
            More +
          </button>
        </div>

        {/* Cards */}
        <div className="flex md:flex-col-2 lg:flex-col-3 h-max gap-y-5 gap-x-4 flex-wrap">
          {info.map((post, i) => (
            <Card key={i} title={post.title} id={post.id} /> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPro;
