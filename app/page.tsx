'use client';

import React, { useState } from "react";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`w-full md:w-64 bg-gradient-to-b from-blue-700 to-blue-900 text-white p-6 border-b md:border-r border-gray-400 md:h-screen overflow-y-auto fixed md:relative transition-transform duration-300 ${isNavOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-400 rounded-full" />
            <div className="ml-4">
              <p className="font-bold">TRACKER USER</p>
              <p className="text-sm text-gray-300">trackeruser@example.com</p>
            </div>
          </div>
          <button 
            className="text-white text-xl font-bold md:hidden" 
            onClick={() => setIsNavOpen(false)}
          >
            ×
          </button>
        </div>
        <nav>
          <p className="font-semibold text-gray-200 mb-2">Mood Tracker 📝</p>
          <ul className="space-y-2 mb-4">
            {["Home", "Track", "Journal", "Reflections", "Entries"].map((item) => (
              <li 
                key={item} 
                className={`cursor-pointer ${activeSection === item ? "text-yellow-400 font-bold" : "hover:text-yellow-300 hover:scale-105 transition-transform"}`} 
                onClick={() => {
                  setActiveSection(item);
                  setIsNavOpen(false);
                }}
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
                onClick={() => {
                  setActiveSection(item);
                  setIsNavOpen(false);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {/* Navbar Toggle Button */}
        <button 
          className="md:hidden p-2 bg-blue-700 text-white rounded mb-4" 
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? "Close Menu" : "Open Menu"}
        </button>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="w-24 h-24 bg-gray-500 rounded" />
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-900">TRACKER USER</h1>
              <p className="text-gray-700">@trackerusername</p>
              <p className="text-sm text-gray-600">21 friends • 9 following • 25 followers</p>
            </div>
          </div>
          <button 
            className="px-4 py-2 bg-blue-700 text-white rounded hover:scale-105 transition-transform mt-4 md:mt-0" 
            onClick={() => setShowProfileModal(true)}
          >
            Update Profile ✏️
          </button>
        </div>

        {/* Mood Tracker */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Mood Tracker 📊</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {["Emotional Diary 📖", "Mental Health 💆‍♂️", "Reflections 🧐"].map((text, idx) => (
              <div key={idx} className="p-6 bg-blue-500 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                <p className="text-2xl font-bold text-white">{46 - idx * 20}</p>
                <p className="text-white">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Overview */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Stats Overview 📈</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Entries Logged", "Journal Reflections", "Mindfulness Sessions"].map((text, idx) => (
              <div key={idx} className="p-6 bg-green-500 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                <p className="text-2xl font-bold text-white">{Math.floor(Math.random() * 100)}</p>
                <p className="text-white">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community Updates */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Community Updates 🌍</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Latest Community Post 📝", "Connect With Others 🤝"].map((text, idx) => (
              <div key={idx} className="p-6 bg-purple-500 text-center rounded hover:scale-105 transition-transform cursor-pointer">
                <p className="font-semibold text-white">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
