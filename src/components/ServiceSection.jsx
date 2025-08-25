import React from "react";

const ServiceSection = ({
  backgroundImage,
  title,
  description,
  overlay = true,
  overlayOpacity = "bg-black/40",
  textColor = "text-white",
}) => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay (optional) */}
      {overlay && <div className={`absolute inset-0 ${overlayOpacity}`}></div>}

      {/* Content */}
      <div
        className={`relative z-10 max-w-3xl px-6 md:px-12 lg:px-20 h-full flex flex-col justify-center ${textColor}`}
      >
        {title && (
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-6 whitespace-pre-line">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-base md:text-lg font-light leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default ServiceSection;
