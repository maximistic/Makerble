

const MainContent = () => {
  return (
    <div className="w-full md:w-1/2 bg-white p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Newsfeed</h2>

      {/* Each feed item */}
      <div className="bg-gray-50 p-4 rounded-md shadow-md">
        <h3 className="font-semibold">Yael Adamson-Brown</h3>
        <p className="text-gray-700">I worked on the API integration for...</p>
        <button className="text-blue-500 hover:underline">Expand Story</button>
      </div>

      {/* More feed items */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Load More
      </button>
    </div>
  );
};

export default MainContent;
