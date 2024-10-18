"use client";
import React from "react";
import { MdOutlineMonitor } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoComment } from "react-icons/go";

const BannerBottom = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-0 lg:flex-row justify-center items-center h-auto lg:h-60 bg-bgColor text-white py-10 px-8 -translate-y-10 z-50">
      <div className="w-full lg:w-[60%] flex flex-col gap-3">
        <p className="text-sm uppercase font-bodyFont font-semibold text-white/50">
          My Blog
        </p>
        <h3 className="font-bodyFont font-bold text-xl md:text-3xl lg:text-4xl"> {/* Increase size on web */}
          These 7 things will change the way you approach learning!
        </h3>
        <p className="text-xs text-white/50 font-bodyFont font-semibold"> 
          Fazila Taqveem / 4 weeks ago
        </p>
      </div>
      <div className="w-full lg:w-[40%] flex items-center justify-center gap-2 lg:gap-8">
        <div className="w-full flex flex-col items-center group">
          <MdOutlineMonitor className="text-3xl lg:text-3xl text-gray-300 group-hover:text-white duration-300" /> {/* Same size for small and large screens */}
          <p className="text-xs md:text-sm font-titleFont font-semibold text-white/50 group-hover:text-white hidden lg:block"> {/* Hide on mobile */}
            watch on youtube
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center group">
          <IoMdHeartEmpty className="text-3xl lg:text-3xl text-gray-300 group-hover:text-white duration-300" /> {/* Same size for small and large screens */}
          <p className="text-xs md:text-sm font-titleFont font-semibold text-white/50 group-hover:text-white hidden lg:block"> {/* Hide on mobile */}
            like our contents
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center group">
          <GoComment className="text-3xl lg:text-3xl text-gray-300 group-hover:text-white duration-300" /> {/* Same size for small and large screens */}
          <p className="text-xs md:text-sm font-titleFont font-semibold text-white/50 group-hover:text-white hidden lg:block"> {/* Hide on mobile */}
            place comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
