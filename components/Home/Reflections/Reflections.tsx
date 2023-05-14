import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function Reflections() {
  return (
    <div id="Reflections" data-aos="fade-up" className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary">
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base">
            {" "}
            05.
          </span>
          <span className=" font-sans text-AAsecondary text-base">
            Hamza&apos;s Reflections
          </span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
      Visit My Blog
      </span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
      Welcome to my blog, where I share my thoughts and experiences on various topics ranging from personal growth, travel, and lifestyle to technology, entertainment, and current events. Through my writing, I aim to inspire and engage readers by offering insights, tips, and perspectives that are both informative and entertaining. Join me on this journey of self-discovery and exploration, and let s learn and grow together!
      </p>
      <div className="pt-4">
        <a href="https://braimi.blogspot.com/" target={"_blank"} rel="noreferrer">
          <button
            className="font-mono text-sm text-AAsecondary border-AAsecondary 
                            px-8 py-4 border-[1.5px] rounded "
          >
            Visit My Blog
          </button>
        </a>
      </div>
    </div>
  );
}
