'use client';

import React, { useState } from "react";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white p-6 border-b md:border-b-0 md:border-r border-gray-300 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-indigo-200 rounded-full" />
          <div className="ml-4">
            <p className="font-bold text-indigo-800">TRACKER USER</p>
            <p className="text-sm text-indigo-600">trackeruser@example.com</p>
          </div>
        </div>
        <nav>
          <p className="font-semibold text-indigo-800 mb-2">Mood Tracker 📝</p>
          <ul className="space-y-2 mb-4">
            {["Home", "Track", "Journal", "Reflections", "Entries"].map((item) => (
              <li 
                key={item} 
                className={`cursor-pointer ${activeSection === item ? "text-indigo-500 font-bold" : "hover:text-indigo-500 hover:scale-105 transition-transform"}`} 
                onClick={() => setActiveSection(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="font-semibold text-indigo-800 mb-2">Thoughts 💭</p>
          <ul className="space-y-2">
            {["Profile", "Preferences", "Privacy"].map((item) => (
              <li 
                key={item} 
                className={`cursor-pointer ${activeSection === item ? "text-indigo-500 font-bold" : "hover:text-indigo-500 hover:scale-105 transition-transform"}`} 
                onClick={() => setActiveSection(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center text-center md:text-left">
            <div className="w-24 h-24 bg-indigo-200 rounded mx-auto md:mx-0" />
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-indigo-900">TRACKER USER</h1>
              <p className="text-indigo-700">@trackerusername</p>
              <p className="text-sm text-indigo-600">21 friends • 9 following • 25 followers</p>
            </div>
          </div>
          <button 
            className="mt-4 md:mt-0 px-4 py-2 bg-indigo-500 text-white rounded hover:scale-105 transition-transform shadow-lg" 
            onClick={() => setShowProfileModal(true)}
          >
            Update Profile ✏️
          </button>
        </div>

        {/* Profile Modal */}
        {showProfileModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4 text-indigo-800">Update Profile</h2>
              <input type="text" placeholder="New Username" className="w-full p-2 border rounded mb-4" />
              <input type="email" placeholder="New Email" className="w-full p-2 border rounded mb-4" />
              <div className="flex justify-end space-x-2">
                <button 
                  className="px-4 py-2 bg-gray-300 rounded" 
                  onClick={() => setShowProfileModal(false)}
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-indigo-500 text-white rounded">Save</button>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Section */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-indigo-800">{activeSection} 📌</h2>
          {activeSection === "Home" && (
            <div>
              <h2 className="text-lg font-semibold mb-4 text-indigo-800">Mood Tracker 📊</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-indigo-200 text-center rounded hover:scale-105 transition-transform cursor-pointer shadow-lg">
                  <p className="text-2xl font-bold text-indigo-900">46</p>
                  <p className="text-indigo-700">Emotional Diary 📖</p>
                </div>
                <div className="p-6 bg-indigo-200 text-center rounded hover:scale-105 transition-transform cursor-pointer shadow-lg">
                  <p className="text-2xl font-bold text-indigo-900">6</p>
                  <p className="text-indigo-700">Mental Health 💆‍♂️</p>
                </div>
                <div className="p-6 border-2 border-indigo-500 text-center rounded hover:scale-105 transition-transform cursor-pointer shadow-lg">
                  <p className="text-2xl font-bold text-indigo-900">6</p>
                  <p className="text-indigo-700">Reflections 🧐</p>
                </div>
              </div>
            </div>
          )}
          {activeSection !== "Home" && (
            <p className="text-indigo-700">You are now viewing the {activeSection} section.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
