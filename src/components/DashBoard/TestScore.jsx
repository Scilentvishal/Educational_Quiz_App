import TitleWithSubtitleIcon from "../TitleWithSubtitleIcon";
import { PiPencilSimpleLight } from "react-icons/pi";
import { TbBriefcase } from "react-icons/tb";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaPercent } from "react-icons/fa";

const TestScore = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="rounded-lg bg-white p-10 shadow-lg flex justify-center items-center">
        <TitleWithSubtitleIcon
          title="32"
          subTitle="Tests Written"
          Icon={PiPencilSimpleLight}
        />
      </div>
      <div className="rounded-lg sm:row-span-2 sm:col-span-1 col-span-2 bg-white p-10 shadow-lg flex flex-col gap-y-4">
        <TitleWithSubtitleIcon
          title="32"
          subTitle="No of Tests"
          Icon={TbBriefcase}
        />
        <TitleWithSubtitleIcon
          title="12"
          subTitle="12"
          Icon={FaRegThumbsUp}
        />
        <TitleWithSubtitleIcon
          title="19"
          subTitle="Failed"
          Icon={FaRegThumbsDown}
        />
        <TitleWithSubtitleIcon
          title="1"
          subTitle="Waiting for result"
          Icon={CiStar}
          IconSize={32}
        />
      </div>
      <div className="rounded-lg bg-white p-10 shadow-lg flex justify-center items-center">
        <TitleWithSubtitleIcon
          title="%80"
          subTitle="Overall Average"
          Icon={FaPercent}
        />
      </div>
    </div>
  );
};

export default TestScore;
