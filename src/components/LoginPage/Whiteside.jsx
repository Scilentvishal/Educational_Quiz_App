import React from "react";
import Logo1 from "@/Assets/Icons/logo-1.svg";
import Image from "next/image";
import Loginform from "./Loginform";

const Whiteside = () => {
  return (
    <>
      <Image src={Logo1} width={200} className="mt-4 mx-4" />
      <div className="mx-auto md:w-1/2 h-screen my-[25%]">
        <p className="text-blue-700 my-4">
          <span className="font-bold text-2xl">Login to your Account</span>
          <br></br>
          with your registered Email Address
        </p>
        <Loginform />
      </div>
    </>
  );
};

export default Whiteside;
