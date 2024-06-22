import { MdOutlineAnalytics } from "react-icons/md";
import { PiPencilSimpleLight } from "react-icons/pi";
import { FaNewspaper } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoTrophyOutline } from "react-icons/io5";

export const Links = [
  {
    title: "Dashboard",
    Icon: MdOutlineAnalytics,
    href: "/",
  },
  {
    title: "Tests",
    Icon: PiPencilSimpleLight,
    href: "/tests",
  },
  {
    title: "Courses",
    Icon: FaNewspaper,
    href: "/courses",
  },
  {
    title: "Profile",
    Icon: FaRegUser,
    href: "/",
  },
  {
    title: "Leaderboard",
    Icon: IoTrophyOutline,
    href: "/",
  },
];
