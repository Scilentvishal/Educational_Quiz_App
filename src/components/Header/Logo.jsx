import Image from "next/image"
import logo from "@/Assets/Icons/logo.svg"

const Logo = () => {
  return (
    <Image src={logo} alt="logo"  />
  )
}

export default Logo