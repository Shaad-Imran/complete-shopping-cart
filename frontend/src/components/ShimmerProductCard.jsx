const ShimmerProductCard = () => {
  return (
    <div className="rounded-xl bg-white p-3 shadow-lg animate-pulse">
      <div className="relative flex items-end overflow-hidden rounded-xl">
        <div className="bg-gradient-to-r from-gray-300 to-gray-200 h-44 w-full"></div>
      </div>

      <div className="mt-1 p-2">
        <div className="h-6 bg-gradient-to-r from-gray-300 to-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-200 rounded"></div>

        <div className="mt-3 flex items-end justify-between">
          <div className="h-7 w-20 bg-gradient-to-r from-gray-300 to-gray-200 rounded"></div>

          <div className="flex items-center space-x-1.5 rounded-lg bg-gradient-to-r from-gray-300 to-gray-200 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            <div className="h-4 w-4 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full"></div>
            <div className="h-5 w-16 bg-gradient-to-r from-gray-300 to-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerProductCard;
