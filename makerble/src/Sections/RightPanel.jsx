import React from 'react';

const RightPanel = () => {
  return (
    <div className="w-full md:w-1/4 bg-gray-100 p-4 space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-2">Boards</h2>
        {/* Boards list */}
        <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
          New Board
        </button>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Personal Progress</h2>
        {/* Progress bar */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <div className="flex items-center justify-between">
            <span>50%</span>
            <div className="w-full bg-gray-300 h-4 rounded-lg overflow-hidden ml-4">
              <div className="bg-green-500 h-full w-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Tasks</h2>
        {/* Tasks list */}
        <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
          Add New Task
        </button>
      </div>
    </div>
  );
};

export default RightPanel;
