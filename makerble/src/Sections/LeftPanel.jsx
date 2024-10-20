
const LeftPanel = () => {
  return (
    <div className="w-full md:w-1/4 bg-gray-100 p-4 space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-2">Contacts</h2>
        {/* List of contacts */}
        <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
          New Contact
        </button>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Projects</h2>
        <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
          New Project
        </button>
        {/* List of projects */}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Albums</h2>
        <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
          New Album
        </button>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Organizations</h2>
        {/* Organizations List */}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Followers</h2>
        {/* Followers list */}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">People You Follow</h2>
        {/* People list */}
      </div>
    </div>
  );
};

export default LeftPanel;
