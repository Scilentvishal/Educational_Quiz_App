import Image from "next/image";
import logo from "@/Assets/Icons/logo-1.svg";

const Logo = () => {
  return <Image src={logo} className="w-80" alt="logo" />;
};

export default Logo;
