'use client';

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("Home");
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const menuItems: string[] = ["Home", "Track", "Journal", "Reflections", "Entries"];
  const settingsItems: string[] = ["Profile", "Preferences", "Privacy"];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 relative">
      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-blue-500 text-black rounded-full shadow-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white p-6 border-r border-gray-300 transition-transform duration-300 z-40 md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
          <div className="ml-4">
            <p className="font-bold text-black">TRACKER USER</p>
            <p className="text-sm text-black">trackeruser@example.com</p>
          </div>
        </div>
        <nav>
          <SidebarSection title="Mood Tracker 📝" items={menuItems} activeSection={activeSection} setActiveSection={setActiveSection} />
          <SidebarSection title="Thoughts 💭" items={settingsItems} activeSection={activeSection} setActiveSection={setActiveSection} />
        </nav>
      </aside>

      {/* Overlay for Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <ProfileHeader setShowProfileModal={setShowProfileModal} />
        {showProfileModal && <ProfileModal setShowProfileModal={setShowProfileModal} />}
        <DynamicSection activeSection={activeSection} />
      </main>
    </div>
  );
};

interface SidebarSectionProps {
  title: string;
  items: string[];
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items, activeSection, setActiveSection }) => (
  <div>
    <p className="font-semibold text-black mb-2">{title}</p>
    <ul className="space-y-2 mb-4">
      {items.map((item) => (
        <li
          key={item}
          className={`cursor-pointer text-black transition-transform ${
            activeSection === item ? "text-blue-500 font-bold" : "hover:text-blue-500 hover:scale-105"
          }`}
          onClick={() => setActiveSection(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

interface ProfileHeaderProps {
  setShowProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ setShowProfileModal }) => (
  <div className="flex flex-col md:flex-row justify-between lg:md:items-center mb-8 space-y-4 md:space-y-0">
    <div className="flex items-center space-x-4">
      <div className="w-24 h-24 bg-gray-300 rounded" />
      <div>
        <h1 className="text-2xl font-bold text-black">TRACKER USER</h1>
        <p className=" text-black">@trackerusername</p>
        <p className="text-sm text-black">21 friends • 9 following • 25 followers</p>
      </div>
    </div>
    <button
      className="px-4 py-2 bg-blue-500 sm:items-c text-white rounded hover:scale-105 transition-transform"
      onClick={() => setShowProfileModal(true)}
    >
      Update Profile ✏️
    </button>
  </div>
);

interface ProfileModalProps {
  setShowProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ setShowProfileModal }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-white p-6 rounded shadow-lg w-96">
      <h2 className="text-xl text-black font-bold mb-4">Update Profile</h2>
      <input type="text" placeholder="New Username" className="w-full p-2 border rounded mb-4" />
      <input type="email" placeholder="New Email" className="w-full p-2 border rounded mb-4" />
      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 bg-gray-900 rounded" onClick={() => setShowProfileModal(false)}>Cancel</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
      </div>
    </div>
  </div>
);

interface DynamicSectionProps {
  activeSection: string;
}

const DynamicSection: React.FC<DynamicSectionProps> = ({ activeSection }) => (
  <section>
    <h2 className="text-lg font-semibold text-black mb-4">{activeSection} 📌</h2>
    {activeSection === "Home" ? <HomeContent /> : <p className="text-black">You are now viewing the {activeSection} section.</p>}
  </section>
);

const HomeContent: React.FC = () => (
  <div>
    <Section title="Mood Tracker 📊" items={["Emotional Diary 📖", "Mental Health 💆‍♂️", "Reflections 🧐"]} />
    <Section title="Stats Overview 📈" items={["Progress", "Goals Reached", "Daily Activity"]} />
    <Section title="Community Updates 📰" items={["Latest Posts", "Trending Discussions"]} />
  </div>
);

interface SectionProps {
  title: string;
  items: string[];
}

const Section: React.FC<SectionProps> = ({ title, items }) => (
  <div className="mb-8">
    <h2 className="text-lg text-black mb-4">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((text, index) => (
        <div key={index} className="p-6 bg-gray-200 text-center rounded hover:scale-105 transition-transform cursor-pointer">
          <p className="text-gray-600">{text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Dashboard;
