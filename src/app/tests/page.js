import TitleWithIcon from "@/components/CommonComponents/TitleWithIcon";
import { TestCard } from "@/constants/TestCard";
import React from "react";
import { IoNewspaper } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

const page = () => {
  return (
    <div className="py-5">
      <div className="flex justify-between">
        <TitleWithIcon text="All Tests" Icon={IoNewspaper} />
        <TitleWithIcon text="Sort" Icon={TiArrowSortedDown} />
      </div>
      <div className="grid grid-cols-4 gap-4 py-5 text-[#312F2F]">
        <div className="col-span-1">
          <TestCard />
        </div>
        <div className="col-span-1">
          <TestCard />
        </div>
        <div className="col-span-1">
          <TestCard />
        </div>
        <div className="col-span-1">
          <TestCard />
        </div>
        <div className="col-span-1">
          <TestCard />
        </div>
        <div className="col-span-1">
          <TestCard />
        </div>
      </div>
    </div>
  );
};

export default page;
