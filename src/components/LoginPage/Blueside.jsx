import React from "react";
import books from "@/Assets/images/books.png";
import Image from "next/image";
import vector from "@/Assets/images/vector.png";
import prop from "@/Assets/images/prop.png";

const Blueside = () => {
  return (
    <>
      {/* <div style={{ zIndex: "-1", position: "fixed" }}>
        <Image src={books} layout="fill" objectFit="cover" />
      </div> */}
      <div className="mx-auto md:w-1/2 h-screen lg:my-[45%] my-[20%] p-8 relative">
        <p className="text-white leading-8">
          Those people who develop the ability to continuously acquire new and
          better forms of knowledge that they can apply to their work and to
          their lives will be the movers and shakers in our society for the
          indefinite future
        </p>
        <p className="text-white mt-6">Brian Tracy</p>
        <Image src={vector} className="absolute top-38 right-4 h-8 w-8 m-2" />
        <Image src={prop} className="absolute top-0 left-0 h-8 w-8 " />
      </div>
    </>
  );
};

export default Blueside;
