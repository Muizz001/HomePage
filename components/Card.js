import Link from "next/link";

export default function BirthdayDecorCard({ title, id }) {
  return (
    <div className="max-w-[362px] bg-white rounded-[10px] shadow-lg overflow-hidden border border-gray-200 h-max">
      <div className="relative">
        <img
          src="https://picsum.photos/400/300" 
          alt="Birthday Decor"
          width={362}
          height={338}
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          <span className="bg-pink-600 text-white text-xs px-2 py-1 rounded-md font-semibold">
            PREMIUM
          </span>
          <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-md font-semibold">
            NEW ARRIVAL
          </span>
        </div>
        <div className="absolute top-2 right-2">
          <button className="bg-white p-1 rounded-full shadow-md">❤️</button>
        </div>
      </div>

      <div className="p-4 h-52">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">
            {title.slice(0, 10) + "..."}
          </h3>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <img
            alt="Suresh Sitharaman"
            src="https://picsum.photos/24/24"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-sm text-gray-700">Suresh Sitharaman</span>
        </div>

        <div className="mt-1 flex items-center gap-1 text-sm text-gray-600">
          <span>⭐ 4.9 (256)</span>
          <span>•</span>
          <span>📍 Indiranagar, BL</span>
        </div>
        <Link href={`/${id}`}>
          <button className="mt-7.5 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 rounded-lg">
            CONTACT NOW
          </button>
        </Link>
      </div>
    </div>
  );
}
