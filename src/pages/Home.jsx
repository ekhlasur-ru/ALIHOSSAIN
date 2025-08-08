import React from "react";
import Photo from "../assets/Ali-Hero-4-min.png";

function Home() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
        <p>👨‍💻 ইনশাআল্লাহ্‌ আপনিও পারবেন</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            কঠিন এবং জটিল টপিক হবে পানির মত সহজ
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            স্কিল ডেভেলপ করে নিজেকে এমনভাবে গড়ে তুলুন, যেমন ভাবে একটা ছোট্ট গাছ
            ধীরে ধীরে বটবৃক্ষে পরিণত হয়। এই যাত্রায়, আজই শুরু হোক আপনার নতুন
            অধ্যায়—যেখানে সফলতা হবে আপনার নিত্যসঙ্গী, আর আপনি হবেন নিজের গল্পের
            নায়ক।
          </p>
          <button className="bg-gradient-to-t from-indigo-400 to-indigo-500 text-white px-6 py-2 rounded hover:from-indigo-500 hover:to-indigo-600 transition-all">
            শেখা শুরু করুন
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Photo}
            alt="Hero"
            className="max-w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;