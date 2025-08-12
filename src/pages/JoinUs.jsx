// src/components/JoinUs.jsx
import React from "react";
import { FaTruck, FaRegCreditCard, FaHandHoldingUsd, FaHome, FaTools } from "react-icons/fa";

export default function JoinUs() {
  return (
    <section className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Join us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* VIP Customer Section */}
          <div className="bg-pink-200 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              VIP Customer
            </h3>
            <p className="text-sm text-gray-700 mb-6">
              You love shopping and want to enjoy VIP perks and advantages.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaTruck className="mr-2" /> Free delivery and Auto-ship
              </li>
              <li className="flex items-center">
                <FaRegCreditCard className="mr-2" /> Get Rewards for Shopping
              </li>
              <li className="flex items-center">
                <FaHandHoldingUsd className="mr-2" /> Beauty extras
              </li>
            </ul>
            <div className="mt-8 flex justify-between">
              <button className="bg-black text-white px-6 py-2 rounded-full">
                JOIN NOW
              </button>
              <button className="text-black underline">LEARN MORE</button>
            </div>
          </div>

          {/* Brand Partner Section */}
          <div className="bg-purple-200 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Brand Partner
            </h3>
            <p className="text-sm text-gray-700 mb-6">
              You are passionate about beauty and enjoy sharing beauty tips with
              friends and family.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaHandHoldingUsd className="mr-2" /> Make money now
              </li>
              <li className="flex items-center">
                <FaHome className="mr-2" /> Work from home
              </li>
              <li className="flex items-center">
                <FaTools className="mr-2" /> Tools and Trainings
              </li>
            </ul>
            <div className="mt-8 flex justify-between">
              <button className="bg-black text-white px-6 py-2 rounded-full">
                JOIN NOW
              </button>
              <button className="text-black underline">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
