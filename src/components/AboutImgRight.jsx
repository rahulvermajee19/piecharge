import React from "react";

const AboutImgRight = ({
  image,
  title,
  description,
  linkText,
  linkUrl,
  textColor = "text-gray-900",
  bgColor = "bg-white",
}) => {
  return (
    <section className={`w-full ${bgColor} py-16`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" >
        {/* Left Content */}
        <div>
          {title && (
            <h2 className={`text-3xl md:text-5xl font-light leading-tight mb-6 whitespace-pre-line ${textColor}`}>
              {title}
            </h2>
          )}
          {description && (
            <p className="text-base md:text-lg font-light leading-relaxed">
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

        {/* Right Image */}
        <div>
          <img
            src={image}
            alt="Service Illustration"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutImgRight;
