"use client";

import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { H2 } from "../CommonComponents/Typography/Headings";
import { TestData } from "@/constants/TestData";
import TestCards from "./TestCards";

const RecentTestSlider = () => {
  return (
    <Swiper
      breakpoints={{
        1040: {
          slidesPerView: 3,
        },
        440: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      spaceBetween={10}
      style={{
        paddingBottom: "2rem",
        "--swiper-pagination-color": "#ffffff",
        "--swiper-pagination-bullet-inactive-color": "#A8A8BD",
        "--swiper-pagination-bullet-inactive-opacity": "1",
      }}
      className="mySwiper "
    >
      {TestData.map((item, i) => (
        <SwiperSlide key={i} className="relative">
          <TestCards data={item} />
          <span class="absolute left-2 top-2  bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            15 mins
          </span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecentTestSlider;
