import React from "react";

const AboutSection = ({
  image,
  title,
  description,
  linkText,
  linkUrl = "#",
  reverse = false, // lets you swap image/text sides
}) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left or Right Image (based on reverse prop) */}
      <div className={`${reverse ? "md:order-2" : "md:order-1"}`}>
        <img
          src={image}
          alt="Section illustration"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right or Left Content */}
      <div className={`${reverse ? "md:order-1" : "md:order-2"}`}>
        {title && (
          <h2 className="text-3xl md:text-5xl font-light leading-snug text-gray-900">
            {title}
          </h2>
        )}
        {description && (
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        )}
        {linkText && (
          <a
            href={linkUrl}
            className="mt-6 inline-block text-lg text-gray-900 font-medium hover:underline"
          >
            {linkText}
          </a>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
