import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import { motion } from "framer-motion";
import ExternalLink from "../../Icons/ExternalLink";

export default function Cover_Letter() {
  const router = useRouter();
  return (
    <div
      id="Cover_Letter"
      className=" flex flex-col space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 06.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Cover_Letter
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col space-y-8 md:space-y-28">
        {/* // ?  Project 1 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://ubiquitous-bublanina-da84ec.netlify.app/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/cv1.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/cv1.png"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                
                <Link href={"/userdatapuller"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    
                  Apply for Data Scientist Job
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                This job offer is for a Data Scientist position. The company is seeking an experienced individual who can use big data sets to optimize products and analyze trends to help make better decisions. The ideal candidate should have a degree in
                 a quantitative field and at least 2 to 3 years of experience as a Data Scientist, Data Analyst, or Software Engineer.
                </p>
                <a href={"https://www.glassdoor.com/Job/settat-data-scientist-jobs-SRCH_IL.0,6_IC3940863_KO7,21.htm?src=GD_JOB_AD&rdserp=true&srs=EI_JOBS&jl=1008589877853&ao=1136043&s=21&guid=000001881aa59ff2a9c56561fcacdf59&pos=101&t=ESR&vt=w&uido=839DC64DC27DA774A3A3649B275C634E&ea=1&cs=1_2672ff95&cb=1684074242300&jobListingId=1008589877853&jrtk=3-0-1h0dab84pj477801-1h0dab85hg2cl800-bb56d63720ce1ff9-"} target={"_blank"} rel="noreferrer">
                <motion.button
       className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover"
      >
        Check_Offer
      </motion.button>
      </a>
      <a href={"/braimi_cover.pdf"} target={"_blank"} rel="noreferrer">
      <motion.button
       className="text-AAsecondary border border-spacing-2 mx-5 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover"
      >
        Cover_Letter
      </motion.button>
      </a>
              </div>
              
            
            </div>
          </div>
        </div>  
       
             
             

      </div>
    </div>
  );
}
