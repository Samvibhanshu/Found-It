'use client';

import React from 'react';
import Sidebar from './Sidebar';
import Card from './Card';
import { useState } from 'react';
import { CurrEmail } from '@/lib/auth';
import { SessionUsername } from '@/lib/username';

const Profile: React.FC = () => {
  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      
      <img
  src="/assets/paperplane.png"
  className="hidden md:block absolute top-[70px] right-[50px] w-150 h-40"
  alt="Decorative Plane"
/>
      
      <div className=" p-7 overflow-x-hidden">
        {/* User Information Section */}
        <div className="bg-[#19647E] p-4 mb-6 rounded-lg shadow-md flex items-center" style={{ height: '270px', width:'95vw' }}>
          {/* Profile Image */}
          <div className="h-4/5 aspect-square">
            <img 
              src="assets/profile.jpg"
              alt="User Avatar"
              className="h-full w-full rounded-full border-4 border-white object-cover"
            />
          </div>
          
          {/* User Info */}
          <div className="flex-grow text-white pl-8">
            <h2 className="text-3xl font-bold mb-6">User Information</h2>
            <div className="space-y-3">
              <p className="text-md">Name: aasasingh2005 </p>
              <p className="text-md">Email ID: aasasingh2005@gmail.com </p>
              <p className="text-md">Address: 1234 Elm St, Springfield</p>
              <p className="text-md">Contact No: +1234567890</p>
            </div>
          </div>
        </div>

        {/* Uploads Section */}
        <section className="mb-10">
          <h2 className="text-2xl text-cyan-900 font-bold mb-4">Uploads</h2>
          <div
            className="flex space-x-6 overflow-x-auto px-2 py-4 scroll-smooth"
            onWheel={handleScroll}
          >
            <Card
              image="/assets/earbuds.jpg"
              title="Earbuds"
              location="Cafeteria"
              time="18:30"
              locationLabel="Found at"
            />
            <Card
              image="/assets/wallet.jpg"
              title="Wallet"
              location="Library"
              time="12:00"
              locationLabel="Found at"
            />
            <Card
              image="/assets/umbrella.jpg"
              title="Umbrella"
              location="Gym"
              time="15:45"
              locationLabel="Found at"
            />
            <Card
              image ="/assets/glasses.jpg"
              title="Glasses"
              location="Cafe"
              time="16:30"
              locationLabel="Found at"
            />
          </div>
        </section>

        {/* Recently Viewed Section */}
        <section className="mb-10">
          <h2 className="text-2xl text-cyan-900 font-bold mb-4">Recently viewed</h2>
          <div
            className="flex space-x-6 overflow-x-auto px-2 py-4 scroll-smooth"
            onWheel={handleScroll}
          >
            <Card
              image="/assets/earbuds.jpg"
              title="Earbuds"
              location="Cafeteria"
              time="18:30"
              locationLabel="Found at"
            />
            <Card
              image="/assets/wallet.jpg"
              title="Wallet"
              location="Library"
              time="12:00"
              locationLabel="Found at"
            />
            <Card
              image="/assets/umbrella.jpg"
              title="Umbrella"
              location="Gym"
              time="15:45"
              locationLabel="Found at"
            />
            <Card
              image ="/assets/glasses.jpg"
              title="Glasses"
              location="Cafe"
              time="16:30"
              locationLabel="Found at"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
