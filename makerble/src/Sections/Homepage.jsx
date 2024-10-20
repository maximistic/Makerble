import { useState } from 'react';
import { Bell, Home, Users, Folder, BookOpen, Heart, Plus, X, ChevronDown, Search } from 'lucide-react';

const HomePage = () => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [storyContent, setStoryContent] = useState('');
  const [storyError, setStoryError] = useState('');
  const [activeTab, setActiveTab] = useState('feed');

  const stories = [
    {
      id: 1,
      author: "John Smith",
      content: "Just completed the quarterly impact assessment!",
      time: "2 hours ago",
      likes: 12
    },
    {
      id: 2,
      author: "Sarah Jones",
      content: "New milestone reached in community outreach program",
      time: "5 hours ago",
      likes: 8
    }
  ];

  const validateStory = () => {
    if (storyContent.length < 3) {
      setStoryError('Story must be at least 3 characters long');
      return false;
    }
    setStoryError('');
    return true;
  };

  const handleStorySubmit = () => {
    if (validateStory()) {
      // Handle story submission
      setIsStoryModalOpen(false);
      setStoryContent('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside className="w-64 fixed h-full bg-white shadow-sm p-4 hidden md:block">
          <div className="space-y-4">
            <button 
              onClick={() => setActiveTab('feed')}
              className={`flex items-center space-x-2 w-full p-2 rounded-lg ${
                activeTab === 'feed' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Feed</span>
            </button>
            <button 
              onClick={() => setActiveTab('projects')}
              className={`flex items-center space-x-2 w-full p-2 rounded-lg ${
                activeTab === 'projects' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
              }`}
            >
              <Folder className="w-5 h-5" />
              <span>Projects</span>
            </button>
            <button 
              onClick={() => setActiveTab('teams')}
              className={`flex items-center space-x-2 w-full p-2 rounded-lg ${
                activeTab === 'teams' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Teams</span>
            </button>
          </div>
        </aside>

        {/* Main Feed */}
        <main className="flex-1 md:ml-64 p-4">
          <div className="max-w-3xl mx-auto">
            {/* Story Creation */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <button 
                onClick={() => setIsStoryModalOpen(true)}
                className="w-full text-left p-3 border rounded-lg text-gray-500 hover:bg-gray-50"
              >
                Share your impact story...
              </button>
            </div>

            {/* Stories Feed */}
            <div className="space-y-4">
              {stories.map(story => (
                <div key={story.id} className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div>
                      <h3 className="font-medium">{story.author}</h3>
                      <p className="text-sm text-gray-500">{story.time}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 mb-4">{story.content}</p>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600">
                    <Heart className="w-5 h-5" />
                    <span>{story.likes}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 fixed right-0 h-full bg-white shadow-sm p-4 hidden lg:block">
          <div className="mb-6">
            <h2 className="font-semibold mb-4">Tasks</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>Complete profile</span>
                <button className="text-blue-600 text-sm">Do it</button>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>Join a project</span>
                <button className="text-blue-600 text-sm">Explore</button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold mb-4">People to Follow</h2>
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                    <span>User Name</span>
                  </div>
                  <button className="text-blue-600 text-sm">Follow</button>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Story Creation Modal */}
      {isStoryModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Create Story</h2>
              <button onClick={() => setIsStoryModalOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <textarea
              className="w-full p-3 border rounded-lg mb-2"
              placeholder="Share your impact story..."
              rows="4"
              value={storyContent}
              onChange={(e) => setStoryContent(e.target.value)}
            ></textarea>
            {storyError && (
              <p className="text-red-500 text-sm mb-2">{storyError}</p>
            )}
            <button
              onClick={handleStorySubmit}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Post Story
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;