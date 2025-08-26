import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBuilding,
} from "react-icons/fa";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-12 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="ml-2 text-xl font-bold"><img src={logo} alt="" /></span>
            </div>
            <p className="text-gray-400">
              Building innovative solutions for the modern world.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 transition hover:text-white"
                aria-label="Facebook">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition hover:text-white"
                aria-label="Twitter">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition hover:text-white"
                aria-label="Instagram">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition hover:text-white"
                aria-label="LinkedIn">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-white">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-white">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-white">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-white">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              <p>123 Business Ave</p>
              <p>San Francisco, CA 94107</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:info@company.com"
                  className="transition hover:text-white">
                  info@company.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+11234567890"
                  className="transition hover:text-white">
                  +1 (123) 456-7890
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-gray-800 pt-6 md:flex-row">
          <p className="mb-4 text-sm text-gray-500 md:mb-0">
            © 2025 Sorder It. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm text-gray-500 transition hover:text-white">
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 transition hover:text-white">
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 transition hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
