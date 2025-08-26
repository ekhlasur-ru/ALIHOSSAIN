import React, { useState } from "react";
import logo from '../assets/logo.png'

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-20 bg-gray-700 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-white md:text-2xl">
            <img src={logo} alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden space-x-6 font-medium text-white md:flex">
            <a href="/" className="transition hover:text-indigo-300">
              হোম
            </a>
            <a href="about" className="transition hover:text-indigo-300">
              মেন্টর
            </a>
            <a href="service" className="transition hover:text-indigo-300">
              সকল কোর্স
            </a>
            <a href="service" className="transition hover:text-indigo-300">
              ব্লগ
            </a>
            <a href="contact" className="transition hover:text-indigo-300">
              যোগাযোগ
            </a>
            <a href="service" className="transition hover:text-indigo-300">
              কুপন
            </a>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <a
              href="login"
              className="rounded-xl bg-gradient-to-r from-indigo-700 to-purple-700 px-4 py-1 text-white transition-all duration-300 hover:from-purple-700 hover:to-indigo-700">
              রেজিস্টার/লগইন
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleDrawer}
              className="text-2xl text-white focus:outline-none"
              aria-label="Toggle menu">
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 transform bg-indigo-700 text-white transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } z-40 shadow-lg md:hidden`}>
        <div className="flex items-center justify-between border-b border-indigo-500 px-4 py-4">
          <span className="text-xl font-bold">Menu</span>
          <button
            onClick={toggleDrawer}
            className="text-2xl text-white focus:outline-none"
            aria-label="Close menu">
            ✕
          </button>
        </div>
        <div className="space-y-4 px-4 py-6 font-medium">
          <a href="/" className="block transition hover:text-indigo-300">
            হোম
          </a>
          <a href="about" className="block transition hover:text-indigo-300">
            মেন্টর
          </a>
          <a href="service" className="block transition hover:text-indigo-300">
            সকল কোর্স
          </a>
          <a href="contact" className="block transition hover:text-indigo-300">
            ব্লগ
          </a>
          <a href="contact" className="block transition hover:text-indigo-300">
            যোগযোগ
          </a>
          <a href="contact" className="block transition hover:text-indigo-300">
            কুপন
          </a>
          <a
            href="login"
            className="mt-4 block rounded-xl bg-white px-4 py-2 text-center font-semibold text-indigo-700 transition-all hover:bg-indigo-300">
            রেজিস্টার/লগইন
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-30 backdrop-blur-sm md:hidden"
          onClick={toggleDrawer}></div>
      )}
    </nav>
  );
};

export default Header;
