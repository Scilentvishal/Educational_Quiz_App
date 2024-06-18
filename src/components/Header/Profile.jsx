import Image from "next/image";
import profile from "@/Assets/Icons/profile.svg"

import { IoIosNotifications } from "react-icons/io";
const Profile = () => {
  return (
    <div className="ml-auto flex justify-center p-4 items-center gap-3">
         <IoIosNotifications size={30} className="ml-auto mr-2" />
      <div className="">
        <Image src={profile} alt="Profile" className="w-12 h-12 object-cover" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-lg">Name Of Person</span>
        <span className="font-semibold text-base">Admin</span>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
