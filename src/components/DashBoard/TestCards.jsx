import Image from "next/image";
import { H6 } from "../CommonComponents/Typography/Headings";

const TestCards = ({ data }) => {
  return (
    <div className="rounded-md relative w-full ">
      <Image
        src={data.Img}
        alt={data.title}
        className="object-cover w-full rounded-md h-60 shadow-md mx-auto"
      />
      <div className="w-3/4 outline backdrop-blur bg-white-100 rounded-lg absolute bottom-2 left-2 ring-0 p-3 text-white flex justify-between gap-1 box-border mx-2 my-2">
        <div className="mx-auto">
          {" "}
          <H6 text={data.title} />
          <span className="bg-gray-100 text-gray-900 text-xs font-medium px-1 py-0.5 rounded">
            {data.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestCards;
