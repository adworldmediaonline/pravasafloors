'use client';

import { useState } from 'react';
import InquiryForm from './InquiryForm';

export default function MobileInquiryButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <div className="relative">
          <button
            onClick={toggleForm}
            className="bg-amber-500 hover:bg-amber-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg rounded-t-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-xl">Get Property Details</h3>
          <button
            onClick={toggleForm}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <InquiryForm />
      </div>
    </>
  );
}
