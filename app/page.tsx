'use client';

import React, { useState } from "react";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-700 to-blue-900 text-white p-6 border-r border-gray-400">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gray-400 rounded-full" />
          <div className="ml-4">
            <p className="font-bold">TRACKER USER</p>
            <p className="text-sm text-gray-300">trackeruser@example.com</p>
          </div>
        </div>
        <nav>
          <p className="font-semibold text-gray-200 mb-2">Mood Tracker 📝</p>
          <ul className="space-y-2 mb-4">
            {["Home", "Track", "Journal", "Reflections", "Entries"].map((item) => (
              <li 
                key={item} 
                className={`cursor-pointer ${activeSection === item ? "text-yellow-400 font-bold" : "hover:text-yellow-300 hover:scale-105 transition-transform"}`} 
                onClick={() => setActiveSection(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="font-semibold text-gray-200 mb-2">Thoughts 💭</p>
          <ul className="space-y-2">
            {["Profile", "Preferences", "Privacy"].map((item) => (
              <li 
                key={item} 
                className={`cursor-pointer ${activeSection === item ? "text-yellow-400 font-bold" : "hover:text-yellow-300 hover:scale-105 transition-transform"}`} 
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
            <div className="w-24 h-24 bg-gray-500 rounded" />
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-900">TRACKER USER</h1>
              <p className="text-gray-700">@trackerusername</p>
              <p className="text-sm text-gray-600">21 friends • 9 following • 25 followers</p>
            </div>
          </div>
          <button 
            className="px-4 py-2 bg-blue-700 text-white rounded hover:scale-105 transition-transform" 
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
                  className="px-4 py-2 bg-gray-400 rounded" 
                  onClick={() => setShowProfileModal(false)}
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Section */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-gray-900">{activeSection} 📌</h2>
          {activeSection === "Home" && (
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Mood Tracker 📊</h2>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-blue-500 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                  <p className="text-2xl font-bold text-white">46</p>
                  <p className="text-white">Emotional Diary 📖</p>
                </div>
                <div className="p-6 bg-blue-600 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                  <p className="text-2xl font-bold text-white">6</p>
                  <p className="text-white">Mental Health 💆‍♂️</p>
                </div>
                <div className="p-6 bg-blue-700 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                  <p className="text-2xl font-bold text-white">6</p>
                  <p className="text-white">Reflections 🧐</p>
                </div>
              </div>
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Stats Overview 📈</h2>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-green-500 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                  <p className="font-semibold text-white">Mood Insights 🧠</p>
                </div>
                <div className="p-6 bg-green-600 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                  <p className="font-semibold text-white">Mindful Guide 🏕️</p>
                </div>
                <div className="p-6 bg-green-700 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                  <p className="font-semibold text-white">Emotional Diary 📔</p>
                </div>
              </div>
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Community Updates 🌍</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-purple-500 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                  <p className="font-semibold text-white">Latest Community Post 📝</p>
                </div>
                <div className="p-6 bg-purple-600 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                  <p className="font-semibold text-white">Connect With Others 🤝</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
