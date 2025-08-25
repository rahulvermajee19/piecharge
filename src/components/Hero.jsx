import React from "react";

const Hero = ({
  backgroundImage,
  subtitle,
  title,
  overlayOpacity = 0.2,
  subtitle2
}) => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay (optional) */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 md:px-16">
        {subtitle && (
          <p className="text-white text-sm uppercase tracking-wide mb-4">
            {subtitle}
          </p>
        )}
        {title && (
          <h1 className="text-white text-4xl md:text-6xl leading-tight">
            {title}
          </h1>
        )}
        {subtitle2 && (
          <p className="text-white text-sm uppercase tracking-wide mb-4">
            {subtitle2}
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;
