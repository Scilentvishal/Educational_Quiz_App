import React from "react";
import avatar1 from "@/Assets/images/avatar1.png";
import avatar2 from "@/Assets/images/avatar2.png";
import avatar3 from "@/Assets/images/avatar3.png";
import avatar4 from "@/Assets/images/avatar4.jpg";
import avatar5 from "@/Assets/images/avatar5.png";
import Badge from "@/Assets/images/Badge.svg";
import Badge1 from "@/Assets/images/Badge (1).svg";
import Badge2 from "@/Assets/images/Badge (2).svg";

import Image from "next/image";

const Other = () => {
  return (
    <>
      <div className="">
        <p className="text-blue-700 font-bold text-lg py-2">
          Other Users Online
        </p>
        <div class="flex flex-wrap gap-2">
          <div>
            <Image src={avatar1} width={60} />
          </div>
          <div>
            {" "}
            <Image src={avatar2} width={60} />
          </div>
          <div>
            {" "}
            <Image src={avatar3} width={60} />
          </div>
          <div>
            {" "}
            <Image src={avatar4} width={60} />
          </div>
          <div>
            {" "}
            <Image src={avatar5} width={60} />
          </div>
        </div>
        <p className="text-blue-700 font-bold text-lg py-2">Achievements</p>
        <div className="flex flex-row gap-3">
          <div>
            <Image src={Badge} width={80} />
          </div>
          <div>
            {" "}
            <Image src={Badge1} width={80} />
          </div>
          <div>
            {" "}
            <Image src={Badge2} width={88} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Other;
