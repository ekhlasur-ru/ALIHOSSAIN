import React from "react";
import Photo from "../assets/Ali-Hero-4-min.png";

function Home() {
  return (
    <>
      <section className="bg-gray-100 px-4 py-12 text-gray-900 md:px-12 lg:px-24 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col-reverse items-center gap-8 md:flex-row">
          {/* Text Section */}
          <div className="space-y-6 md:w-1/2">
            <p>👨‍💻 ইনশাআল্লাহ্‌ আপনিও পারবেন</p>
            <h2 className="text-3xl leading-snug font-bold md:text-4xl">
              কঠিন এবং জটিল টপিক হবে পানির মত সহজ
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              স্কিল ডেভেলপ করে নিজেকে এমনভাবে গড়ে তুলুন, যেমন ভাবে একটা ছোট্ট
              গাছ ধীরে ধীরে বটবৃক্ষে পরিণত হয়। এই যাত্রায়, আজই শুরু হোক আপনার
              নতুন অধ্যায়—যেখানে সফলতা হবে আপনার নিত্যসঙ্গী, আর আপনি হবেন নিজের
              গল্পের নায়ক।
            </p>
            <button className="rounded bg-gradient-to-r from-indigo-700 to-purple-700 px-6 py-2 text-white transition-all duration-300 hover:from-purple-700 hover:to-indigo-700">
              শেখা শুরু করুন
            </button>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:w-1/2">
            <img
              src={Photo}
              alt="Hero"
              className="h-auto max-w-full rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>

      <section>
        <p className="items-center bg-gradient-to-r from-indigo-700 to-purple-700 px-6 py-[100px] text-center text-[16px] font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 md:text-[30px] xl:text-[40px]">
          লাখ টাকা আয়ের স্বপ্নে বিভোর না হয়ে <br />{" "}
          <u>স্কিল ডেভেলপ করে নিজের স্বপ্ন সত্যি </u>
          করুন
        </p>
      </section>
    </>
  );
}

export default Home;
