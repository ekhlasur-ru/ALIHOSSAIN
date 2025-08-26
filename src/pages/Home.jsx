import React from "react";
import Photo from "../assets/Ali-Hero-4-min.png";
import HeroCourse from "../components/HeroCourse";
import StudentReview from "../components/StudentReview";
import pin from "../assets/get-in-touch-min.png";
import CourseSlid from "../components/CourseSlid";
// import CustomeSlid from "../components/CustomSlid";

function Home() {
  return (
    <>
      <section className="bg-gray-100 px-6 pt-4 pb-8 text-gray-100 md:px-12 lg:px-24 dark:bg-gray-800 dark:text-gray-100">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 md:flex-row">
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
          <div className="relative flex w-full justify-center md:w-1/2">
            <img
              // src={Photo}
              src="https://res.cloudinary.com/dtmnhybrc/image/upload/v1755751206/users/file.jpg"
              alt="Hero"
              className="h-auto max-w-full rounded-md shadow-lg"
            />
            <div className="absolute top-[400px] right-2 z-10 md:top-[430px] md:right-2 xl:top-[540px] xl:right-20">
              <img className="animate-bounce" src={pin} alt="pin logo" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-900">
        <p className="mx-auto flex h-[500px] max-w-7xl flex-col items-center justify-center px-6 text-[20px] font-semibold text-white transition-all duration-300 md:text-4xl md:text-[30px] xl:text-[40px]">
          লাখ টাকা আয়ের স্বপ্নে বিভোর না হয়ে <br />
          <p>
            <u className="underline-offset-4">
              স্কিল ডেভেলপ করে নিজের স্বপ্ন সত্যি
            </u>{" "}
            করুন
          </p>
        </p>
      </section>

      <section className="h-[500px] bg-white py-10 text-center text-white dark:bg-gray-800">
        <div>
          <h2>একটা কোর্স সিলেক্ট করে শেখা শুরু করুন</h2>
          <p>শুধু স্বপ্ন না দেখে স্বপ্নকে বাস্তব করুন</p>
        </div>
        <div>
          <p className="text-8xl">carusel</p>
        </div>
      </section>

      <HeroCourse />

      <StudentReview />

      <CourseSlid />
      {/* <CustomeSlid /> */}

      <section></section>
    </>
  );
}

export default Home;
