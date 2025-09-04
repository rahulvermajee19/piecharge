// src/components/HowItWorks.jsx
import React from "react";

const HowItWorks = ({ title, steps, image }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
          {title}
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              {/* Circle icon */}
              <div className="w-4 h-4 rounded-full bg-gray-200 mt-2 mr-4 flex-shrink-0"></div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {step.heading}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mt-1">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full h-full">
        <img
          src={image}
          alt="How it works"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
