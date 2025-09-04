import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Card = ({
  title,
  subtitle,
  images = [], // array of { src: "img.png", color: "#000000" }
  onBuyNow,
  onLearnMore,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image on arrows
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Change image on color swatch click
  const selectColor = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-gray-100 rounded-xl shadow-sm overflow-hidden p-6 flex flex-col justify-between" style={{ height: '60vh'}}>
      {/* Title + Subtitle */}
      <div>
        {title && (
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        )}
        {subtitle && (
          <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
        )}
      </div>

      {/* Image + Navigation */}
      <div className="relative flex justify-center items-center my-6">
        {images.length > 1 && (
          <button
            onClick={prevSlide}
            className="absolute left-0 p-2 bg-white rounded-full shadow hover:bg-gray-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {images.length > 0 && (
          <img
            src={images[currentIndex].src}
            alt={title || "Product image"}
            className="w-full h-auto max-h-72 object-contain transition-all duration-300"
          />
        )}

        {images.length > 1 && (
          <button
            onClick={nextSlide}
            className="absolute right-0 p-2 bg-white rounded-full shadow hover:bg-gray-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Actions + Color Swatches */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-4">
          {onBuyNow && (
            <button
              onClick={onBuyNow}
              className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200"
            >
              Buy Now
            </button>
          )}
          {onLearnMore && (
            <button
              onClick={onLearnMore}
              className="text-sm font-medium text-gray-800 hover:underline"
            >
              Learn more
            </button>
          )}
        </div>

        {/* Color Swatches */}
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => selectColor(i)}
              className={`w-6 h-6 rounded-full border-2 ${
                i === currentIndex ? "border-black" : "border-transparent"
              }`}
              style={{ backgroundColor: img.color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
