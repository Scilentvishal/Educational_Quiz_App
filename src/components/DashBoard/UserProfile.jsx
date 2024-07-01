import React from "react";
import dp from "@/Assets/images/dp.png";
import Image from "next/image";
import { FaFlag, FaCheckCircle } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";

const UserProfile = () => {
  return (
    <div class="flex flex-col lg:flex-row  px-2 py-2">
      <div>
        <Image src={dp} />
      </div>
      <div>
        <p className="md:my-5">
          {" "}
          <span className="text-blue-700 font-bold text-2xl">
            Oluwatobi Olowu
          </span>
          <br />
          <span className="text-gray-500">Bonus booster 24lv</span>{" "}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full w-[50%]"></div>
        </div>
        <div className="flex flex-row flex-wrap gap-4 py-5">
          <div className="flex flex-row">
            <div className="bg-white rounded-md p-5 mx-2">
              <FaFlag className="w-65" style={{ color: "blue" }} />
            </div>
            <p className="text-gray-400">
              27
              <br />
              Quiz Passed
            </p>
          </div>
          <div className="flex flex-row">
            <div className="bg-white rounded-md p-5 mx-2">
              <IoIosTime className="w-65" style={{ color: "blue" }} />
            </div>
            <p className="text-gray-400">
              27 min
              <br />
              Fastest time
            </p>
          </div>
          <div className="flex flex-row">
            <div className="bg-white rounded-md p-5 mx-2">
              <FaCheckCircle className="w-65" style={{ color: "blue" }} />
            </div>
            <p className="text-gray-400">
              200
              <br />
              Correct Answers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
