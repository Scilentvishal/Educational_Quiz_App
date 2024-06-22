import Other from "./Other";
import RecentTestSection from "./RecentTestSection";
import TestScore from "./TestScore";
import UserProfile from "./UserProfile";

const DashboardContent = () => {
  return (
    <>
      <div className="w-full bg-gray-100">
        <UserProfile />
      </div>
      <div className="grid grid-cols-2 gap-4 items-center ">
        <div className="lg:col-span-1 col-span-2">
          <RecentTestSection />
        </div>
        <div className="lg:col-span-1 col-span-2">
          <Other />
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
