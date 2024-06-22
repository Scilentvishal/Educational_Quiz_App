import Image from "next/image";
import profile from "@/Assets/Icons/profile.svg";

import { IoIosNotifications } from "react-icons/io";
import { MdNotifications } from "react-icons/md";

const Profile = () => {
  return (
    <div className="ml-auto flex p-4 items-center gap-3">
      {/* <IoIosNotifications size={10} className="ml-auto mr-2" /> */}
      <MdNotifications size={40} />
      <div className="">
        <Image src={profile} alt="Profile" className="w-12 h-12 object-cover" />
      </div>
      <div className="hidden md:flex flex-col">
        <span className="font-bold text-lg">Name</span>
        <span className="font-semibold text-base">Admin</span>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
