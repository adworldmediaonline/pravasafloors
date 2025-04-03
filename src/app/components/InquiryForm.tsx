'use client';

import { useState } from 'react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {isSubmitted ? (
        <div className="text-center">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
          <p className="mb-4">Your inquiry has been submitted successfully.</p>
          <p>Our team will contact you shortly.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold mb-4">Request Information</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-1">
                Phone*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-lg text-white font-bold text-lg ${
                isSubmitting ? 'bg-gray-400' : 'bg-amber-500 hover:bg-amber-600'
              } transition duration-300`}
            >
              {isSubmitting ? 'Submitting...' : 'Get Property Details'}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
