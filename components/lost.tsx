'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Card from './Card';
import AddItemButton from './Addbutton';
import AddItemForm from './AddItemForm'; 

const Lost: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Initialize the modal state

  // Scroll handler function to scroll horizontally with mouse wheel
  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white-100 flex">
      <Sidebar />

      <div className="flex-grow p-6 overflow-y-auto" onWheel={handleScroll}>
        <header className="flex justify-between items-end mb-6 mt-10">
          <h1 className="text-5xl p-8 font-bold text-cyan-900">
            <span className="text-[#19647E]">Lost it? :(</span>
          </h1>

          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Search..."
          />
          <button
            className="bg-cyan-900 font-bold text-white rounded-md px-5 py-4 hover:bg-cyan-700 absolute"
            style={{ top: '50px', right: '20px' }} 
            onClick={() => setIsModalOpen(true)}
          >
            + Add Item
          </button>
        </header>

        <section className="mb-10">
          <h2 className="text-3xl text-cyan-900 font-bold mb-4">Items</h2>
          <div className="flex flex-row flex-wrap gap-6">
            <Card
              image = "/assets/wallet.jpg"
              title="Lost Wallet"
              location="Library"
              time="14:40"
              locationLabel="Lost at"
            />
            <Card
              image ="/assets/earbuds.jpg"
              title="Earbuds"
              location="Cafeteria"
              time="18:30"
              locationLabel="Lost at"
            />
            <Card
              image ="/assets/bottle.jpg"
              title="Water Bottle"
              location="Gym"
              time="6:30"
              locationLabel="Lost at"
            />
            <Card
              image ="/assets/umbrella.jpg"
              title="Umbrella"
              location="Park"
              time="17:30"
              locationLabel="Lost at"
            />
            <Card
              image ="/assets/glasses.jpg"
              title="Glasses"
              location="Cafe"
              time="16:30"
              locationLabel="Lost at"
            />
          </div>
        </section>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-10 right-0 text-white text-xl font-bold hover:text-gray-300"
              >
                ✕
              </button>
              <AddItemForm onClose={() => setIsModalOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lost;
