import Profile from "../Header/Profile";
import SearchQuiz from "./SearchQuiz";

const Header = () => {
  return (
    <div className="flex items-center justify-end">
      <div>
        {" "}
        <SearchQuiz />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
};

export default Header;
