import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Explorer */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explorer</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Electric bikes</a></li>
            <li><a href="#">City bikes</a></li>
            <li><a href="#">Kids' bikes</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Outlet</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Insurance Electric</a></li>
            <li><a href="#">Size guide</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">About us</a></li>
            <li><a href="#">Journal</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Jobs</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Assembly & manuals</a></li>
            <li><a href="#">Payment options</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Terms & conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Join the ride.</h3>
          <p className="text-gray-300 mb-4">Sign up for our newsletter.</p>

          {/* Newsletter Form */}
          <form className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Enter your email address here"
              className="flex-1 px-4 py-3 rounded-l-full border border-gray-500 bg-black text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black rounded-r-full font-medium"
            >
              Subscribe
            </button>
          </form>

          {/* Privacy Checkbox */}
          <div className="flex items-start text-gray-300 mb-6">
            <input type="checkbox" className="mt-1 mr-2" />
            <span>
              By signing up, I agree to the{" "}
              <a href="#" className="underline">privacy policy</a> of Veloretti.
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-300 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
