import React, { useState } from "react";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 border-r border-gray-300">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
          <div className="ml-4">
            <p className="font-bold">TRACKER USER</p>
            <p className="text-sm text-gray-500">trackeruser@example.com</p>
          </div>
        </div>
        <nav>
          <p className="font-semibold text-gray-700 mb-2">Mood Tracker 📝</p>
          <ul className="space-y-2 mb-4">
            {["Home", "Track", "Journal", "Reflections", "Entries"].map((item) => (
              <li 
                key={item} 
                className={`cursor-pointer ${activeSection === item ? "text-blue-500 font-bold" : "hover:text-blue-500 hover:scale-105 transition-transform"}`} 
                onClick={() => setActiveSection(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="font-semibold text-gray-700 mb-2">Thoughts 💭</p>
          <ul className="space-y-2">
            {["Profile", "Preferences", "Privacy"].map((item) => (
              <li 
                key={item} 
                className={`cursor-pointer ${activeSection === item ? "text-blue-500 font-bold" : "hover:text-blue-500 hover:scale-105 transition-transform"}`} 
                onClick={() => setActiveSection(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Profile Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="w-24 h-24 bg-gray-300 rounded" />
            <div className="ml-4">
              <h1 className="text-2xl font-bold">TRACKER USER</h1>
              <p className="text-gray-600">@trackerusername</p>
              <p className="text-sm text-gray-500">21 friends • 9 following • 25 followers</p>
            </div>
          </div>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:scale-105 transition-transform" 
            onClick={() => setShowProfileModal(true)}
          >
            Update Profile ✏️
          </button>
        </div>

        {/* Profile Modal */}
        {showProfileModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
              <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
              <input type="text" placeholder="New Username" className="w-full p-2 border rounded mb-4" />
              <input type="email" placeholder="New Email" className="w-full p-2 border rounded mb-4" />
              <div className="flex justify-end space-x-2">
                <button 
                  className="px-4 py-2 bg-gray-300 rounded" 
                  onClick={() => setShowProfileModal(false)}
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Section */}
        <section>
          <h2 className="text-lg font-semibold mb-4">{activeSection} 📌</h2>
          {activeSection === "Home" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Mood Tracker 📊</h2>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-gray-200 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                  <p className="text-2xl font-bold">46</p>
                  <p className="text-gray-600">Emotional Diary 📖</p>
                </div>
                <div className="p-6 bg-gray-200 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                  <p className="text-2xl font-bold">6</p>
                  <p className="text-gray-600">Mental Health 💆‍♂️</p>
                </div>
                <div className="p-6 border-2 border-blue-500 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                  <p className="text-2xl font-bold">6</p>
                  <p className="text-gray-600">Reflections 🧐</p>
                </div>
              </div>
              
              <h2 className="text-lg font-semibold mb-4">Stats Overview 📈</h2>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-gray-200 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                  <p className="font-semibold">Mood Insights 🧠</p>
                </div>
                <div className="p-6 bg-gray-200 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                  <p className="font-semibold">Mindful Guide 🏕️</p>
                </div>
                <div className="p-6 bg-gray-200 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                  <p className="font-semibold">Emotional Diary 📔</p>
                </div>
              </div>
              
              <h2 className="text-lg font-semibold mb-4">Community Updates 🌍</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gray-200 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                  <p className="font-semibold">Latest Community Post 📝</p>
                  <p className="text-gray-600">&quote;Just finished my 30-day mood tracking challenge! Feeling great!&quote;</p>
                </div>
                <div className="p-6 bg-gray-200 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                  <p className="font-semibold">Connect With Others 🤝</p>
                </div>
              </div>
            </div>
          )}
          {activeSection !== "Home" && (
            <p className="text-gray-600">You are now viewing the {activeSection} section.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
