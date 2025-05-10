export default async function Page({ params }) {
  const res = await fetch(`https://tenders.guru/api/pl/tenders/${params.id}`);
  const data = await res.json();


  return (
    <div className="flex flex-col w-full md:justify-center items-center md:flex-row my-[100px] min-h-screen">
      {/* Left: Image Section */}
      <div className="md:w-[400px] w-[90%] h-[300px] md:h-auto bg-gray-300">
        <img
          src="https://picsum.photos/800/600"
          alt="Tender Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Info Section */}
      <div className="flex flex-col justify-center px-6 py-10 gap-6 w-[90%] md:w-[400px] bg-white">
        <h1 className="text-3xl font-bold text-gray-800">{data.title}</h1>
        <p className="text-gray-600">
          {data.description || "No description available."}
        </p>

        <div className="flex items-center gap-4 mt-6">
          <img
            src="https://picsum.photos/24/24"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800">
              {data.buyer?.name || "Unknown Buyer"}
            </p>
            <p className="text-sm text-gray-600">
              {data.buyer?.address || "No Address Provided"}
            </p>
            <p className="text-sm text-blue-600">
              {data.buyer?.email || "No Email"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
