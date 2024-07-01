import React from "react";
import { TestData } from "@/constants/TestData";
import { IoNewspaper } from "react-icons/io5";
import TitleWithIcon from "../CommonComponents/TitleWithIcon";
import TestCards from "./TestCards";

const Featuredtests = () => {
  return (
    <div>
      <TitleWithIcon text="Featured Tests" Icon={IoNewspaper} />
      <div className="flex flex-wrap mt-6 gap-6">
        {TestData.map((item, i) => (
          <div key={i} className="relative">
            <TestCards data={item} />
            <span class="absolute left-2 top-2  bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
              15 mins
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featuredtests;
