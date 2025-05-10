import React from "react";
import Card from "./Card";

const items = [
  { id: 1, title: "Birthday Special Decors" },
  { id: 2, title: "Candlelight Dinners" },
  { id: 3, title: "Birthday Cakes" },
  { id: 4, title: "Birthday Surprises" },
  { id: 5, title: "Couple Activities" },
  { id: 6, title: "Birthday Special Decors" },
  { id: 7, title: "Candlelight Dinners" },
  { id: 8, title: "Birthday Cakes" },
  { id: 9, title: "Birthday Surprises" },
  { id: 10, title: "Couple Activities" },
  { id: 11, title: "Birthday Special Decors" },
  { id: 12, title: "Candlelight Dinners" },
  { id: 13, title: "Birthday Cakes" },
  { id: 14, title: "Birthday Surprises" },
];

const data = await fetch('https://tenders.guru/api/pl/tenders')
const posts = await data.json()
const info = posts.data.slice(0, 6)

const TopPro = () => {
  return (
    <section className="mt-10 lg:mt-[123px] px-4 lg:px-[30px]">
      <h2 className="text-[18px] lg:text-[20px] mb-5 lg:ml-[294px] text-center lg:text-left">
        Top professionals for Birthday Decorations
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 lg:flex-col lg:gap-[15px] w-full lg:w-[227px]">
          {items.map((item) => (
            <button
              key={item.id}
              className="py-2 px-5 bg-white text-[#8E44AD] rounded-[7px] w-max border border-[#8E44AD] hover:bg-[#8E44AD] hover:text-white transition-all"
            >
              {item.title}
            </button>
          ))}
          <button className="py-2 px-5 bg-[#8E44AD66] text-[#8E44AD] rounded-[7px] w-max border border-[#8E44AD]">
            More +
          </button>
        </div>

        {/* Cards */}
        <div className="flex md:flex-col-2 justify-center lg:flex-col-3 h-max gap-y-5 gap-x-4 flex-wrap">
          {info.map((post, i) => (
            <Card key={i} title={post.title} id={post.id} /> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPro;
