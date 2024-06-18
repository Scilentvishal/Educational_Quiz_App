import RecentTestSection from "./RecentTestSection";
import TestScore from "./TestScore";

const DashboardContent = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="lg:col-span-1 col-span-2">
          <RecentTestSection />
        </div>
        <div className="lg:col-span-1 col-span-2">
            <TestScore />
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
