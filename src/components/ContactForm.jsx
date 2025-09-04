// src/components/ContactForm.jsx
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    companySize: "",
    bikes: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate API call here
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-light text-center mb-10">
        Get in touch
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white"
      >
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          type="text"
          name="companyName"
          placeholder="Company name"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <select
          name="companySize"
          value={formData.companySize}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="">Company Size</option>
          <option value="1-10">1–10</option>
          <option value="11-50">11–50</option>
          <option value="51-200">51–200</option>
          <option value="200+">200+</option>
        </select>


        <input
          type="number"
          name="bikes"
          placeholder="Number of bikes"
          value={formData.bikes}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="How can we help"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-gray-500 text-white py-4 rounded-full hover:bg-gray-600 transition"
        >
          Send the request
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
