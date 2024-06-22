import Profile from "../Header/Profile";
import SearchQuiz from "./SearchQuiz";

const Header = () => {
  return (
    // <div className="flex-row md:flex-col items-center justify-between">
    //   <div>
    //     {" "}
    //     <SearchQuiz />
    //   </div>
    //   <div>
    //     <Profile />
    //   </div>
    // </div>
    <div className="flex flex-row justify-between">
      <SearchQuiz />
      <Profile />
    </div>
  );
};

export default Header;
