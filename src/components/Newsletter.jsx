import React from "react";

const Newsletter = () => {
  return (
    <section className="p-3 bg-blue-100 mt-20">
      <div className="container flex flex-col md:flex-row gap-20 justify-between py-16">
        <div className="flex-1">
          <h2
            className="
                text-2xl
                md:text-3xl
                font-bold
                pb-5
                text-center
                md:text-left
                text-gray-800
              "
          >
            Sign up for newsletter
          </h2>
          <p className="w-full md:w-4/5 text-center md:text-left text-gray-700">
            Sign up now and be the first to know about exclusive offers, latest
            fashion news & style tips!
          </p>
        </div>

        <div className="flex-1">
          <form action="" className="">
            <input
              className="md:w-4/5  w-full border border-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-5 rounded-md mb-3"
              type="email"
              placeholder="email@example.com"
              required
            />
            <button className="w-full md:w-auto py-2 px-9 rounded-md transition bg-indigo-600 hover:bg-indigo-400 text-white">
              Sign Up For Free
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
