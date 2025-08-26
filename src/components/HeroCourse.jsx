import React from "react";
import animatSvg from "../assets/undraw_secure-password_9qv4.svg";
import secondimg from "../assets/WordPress-Roadmap-min-300x226.png";
const courseFeatures = [
  {
    title: "প্রোজেক্ট ভিত্তিক স্টাডি",
    description:
      "যে কোনো কিছু শিখতে গেলে আমি সবসময় ফাউন্ডেশনের ওপর জোর দিই। ভিত্তি যদি শক্ত না হয়, তাহলে বড় কিছু গড়ে ওঠে না। এখানেও ঠিক একইভাবে আপনি শিখবেন। প্রথমে ফাউন্ডেশন মজবুত করবেন, তারপর প্রোজেক্টের মাধ্যমে ধাপে ধাপে এগিয়ে যাবেন। এটা এক ধরনের নির্মাণ কাজের মতো—ভিত্তি শক্ত হলে ভবন দাঁড়িয়ে যায় টিকে থাকার জন্য।",
  },
  {
    title: "রিয়েলটাইম প্রোগ্রেস ট্র্যাকিং",
    description:
      "আপনি কতটুকু কাজ শিখেছেন, কতটুকু এখনও বাকি, আর কবে কোর্সে যোগ দিয়েছেন—সবকিছুই এখন থাকবে আপনার হাতের মুঠোয়। রিয়েলটাইম ড্যাশবোর্ডে এক নজরে দেখতে পারবেন সবকিছু। যেন নিজের শেখার গল্পটা আপনি নিজেই লিখছেন, এক পৃষ্ঠা থেকে আরেক পৃষ্ঠায় এগিয়ে চলেছেন।",
  },
  {
    title: "শিখুন ইন্ডাস্ট্রি এক্সপার্ট থেকে",
    description:
      "১২ বছরেরও বেশি সময় ধরে আমি ওয়েব ডেভেলপার হিসেবে কাজ করছি। কাজের প্রতিটি মুহূর্ত ছিল শেখার এবং অভিজ্ঞতার গল্প। সেই বাস্তব কাজের অভিজ্ঞতা থেকেই এবার আপনাকে শেখাবো—যা শুধু তত্ত্ব নয়, বরং হাতেকলমে প্রয়োগের মজাও পাবেন। মনে হবে যেন আমরা একসঙ্গে কাজ করছি, একই টেবিলে বসে।",
  },
];

function HeroCourse() {
  return (
    <>
      <section className="rounded-[80px] bg-white py-12 text-center text-white xl:rounded-[200px] xl:py-8 dark:bg-gray-600">
        <div className="">
          <h2 className="text-4xl font-bold text-gray-600 md:text-6xl dark:text-white">
            কোর্সে কি কি পাবেন?
          </h2>
          <p className="mt-2 mb-8 text-sm text-gray-600 md:mb-0 md:text-xl dark:text-gray-300">
            দেখে নিন কি কি পাচ্ছেন রেকর্ডেড কোর্সে জয়েন করলে
          </p>
        </div>

        <div className="flex min-h-[600px] flex-wrap items-center justify-center gap-6">
          {courseFeatures.map((feature, index) => (
            <div
              key={index}
              className="h-[500px] w-[350px] rounded bg-white p-4 text-black shadow-md transition-all hover:shadow-lg md:w-[320px] xl:w-[400px]">
              <div className="mx-auto mb-4 h-[200px] w-[150px] pt-8">
                <img
                  className="animate-pulse"
                  src={animatSvg}
                  alt="Feature illustration"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-md text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white my-8 px-4 py-10 text-gray-800 dark:bg-gray-800 dark:text-white">
        <div className="flex flex-col items-center justify-center py-8">
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-6xl dark:text-white">
            আমার সম্পর্কে কিছু কথা
          </h2>
          <p className="mb-6 text-2xl text-gray-600 dark:text-gray-300">
            কে, কেন, কিভাবে?
          </p>
        </div>{" "}
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-8 md:flex-row">
          {/* Image Section */}
          <div className="flex w-full items-center justify-center md:w-1/2">
            <img
              className="w-[80%] rounded shadow-md"
              src={secondimg}
              alt="WordPress"
            />
          </div>

          {/* Text Section */}
          <div className="w-full text-center md:w-1/2 md:text-left">
            <p className="text-xl leading-relaxed">
              আমি <strong>আলী হোসেন</strong>, একজন ওয়েব ডেভেলপার। দীর্ঘদিন ধরে
              ফ্রিল্যান্সিং করছি টপ মার্কেটপ্লেস যেমন Fiverr এবং Upwork-এ। এমনকি
              Upwork-এ আমি ছিলাম <strong>Top Rated Freelancer</strong>। এরপর
              যুক্ত হই একটি আমেরিকান কোম্পানির রিমোট জবের জন্য।
              <br />
              প্রোগ্রামিং আর ওয়েব ডেভেলপমেন্ট শেখা আমার জন্য সবসময়ই এক ধরনের
              ভালো লাগার বিষয়। সেই ভালো লাগা থেকেই ২০১৯ সালে শুরু করি{" "}
              <strong>Procoder BD</strong> নামে একটি YouTube চ্যানেল। এখন সেখানে
              ৬২৫টিরও বেশি ভিডিও রয়েছে, যেগুলো লক্ষ লক্ষ লার্নারকে প্রতিদিন
              সহায়তা করছে।
            </p>
            <div className="pt-8 text-right">
              <p className="text-xl font-bold">আলী হোসেন</p>
              <p>Web Developer, Teacher</p>
              <p>CEO - Ali Hossain Academy</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroCourse;
