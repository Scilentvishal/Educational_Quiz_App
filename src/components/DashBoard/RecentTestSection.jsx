import TitleWithIcon from "../CommonComponents/TitleWithIcon"
import { IoNewspaper } from "react-icons/io5";
import RecentTestSlider from "./RecentTestSlider";

const RecentTestSection = () => {
  return (
    <div>
      <TitleWithIcon text="Recent Tests" Icon={IoNewspaper} />
      <div className="w-full pt-4">
        <RecentTestSlider />
      </div>
    </div>
  )
}

export default RecentTestSection