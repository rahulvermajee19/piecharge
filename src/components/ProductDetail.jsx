// src/components/ProductDetail.jsx
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import cycleImg from "../assets/img/cycle.png"; // example image

const ProductDetail = () => {
  const images = [
    new URL("../assets/img/cycle.png", import.meta.url).href,
    new URL("../assets/img/cycle.png", import.meta.url).href,
    new URL("../assets/img/cycle.png", import.meta.url).href,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* LEFT: IMAGE CAROUSEL */}
      <div className="relative bg-gray-100 rounded-lg p-6 flex justify-center items-center">
        <img
          src={images[currentImage]}
          alt="Bike"
          className="w-full h-auto object-contain"
        />

        {/* Left arrow */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <FaChevronLeft />
        </button>

        {/* Right arrow */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <FaChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentImage ? "bg-black" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* RIGHT: PRODUCT DETAILS */}
      <div className="px-4">
        {/* Title + Price */}
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-light">
            Electric Ivy<span className="ml-1 text-sm font-medium">Two</span>
          </h2>
          <p className="text-2xl font-semibold">€ 3.299</p>
        </div>

        {/* Variants */}
        <div className="flex space-x-4 mb-6">
          <div className="border rounded-lg p-2 cursor-pointer">
            <img src={cycleImg} alt="Ace" className="w-24" />
            <p className="text-sm text-center">
              Electric Ace <sup>Two</sup>
            </p>
          </div>
          <div className="border-2 border-black rounded-lg p-2 cursor-pointer">
            <img src={cycleImg} alt="Ivy" className="w-24" />
            <p className="text-sm text-center">
              Electric Ivy <sup>Two</sup>
            </p>
          </div>
        </div>

        {/* Color Options */}
        <div className="mb-6">
          <p className="mb-2 font-medium">Ivy Two Matte Black</p>
          <div className="flex space-x-3">
            <span className="w-6 h-6 bg-black rounded-full border-2 border-gray-400 cursor-pointer"></span>
            <span className="w-6 h-6 bg-gray-600 rounded-full cursor-pointer"></span>
            <span className="w-6 h-6 bg-gray-300 rounded-full cursor-pointer"></span>
            <span className="w-6 h-6 bg-yellow-100 rounded-full cursor-pointer"></span>
          </div>
        </div>

        {/* Klarna & Description */}
        <p className="text-sm text-gray-600 mb-4">
          3 interest-free payments with <span className="font-semibold">Klarna</span>.
        </p>
        <p className="text-gray-600 mb-6">
          The Ivy Two is a step-through frame electric bike combining design,
          advanced technology, and safety features. Rider height: between 164
          and 184cm.
        </p>

        {/* Buttons */}
        <div className="flex flex-col space-y-4 mb-6">
          <button className="w-full border rounded-full py-3 text-gray-800">
            Scroll to Specifications ▼
          </button>
          <button className="w-full bg-black text-white rounded-full py-3">
            Customise now
          </button>
        </div>

        {/* Shipping Info */}
        <div className="text-gray-600 text-sm space-y-1">
          <p>Shipping to the Netherlands, Belgium & Germany only.</p>
          <p>Delivery time: 5-15 business days</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
