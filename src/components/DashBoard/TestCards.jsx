import Image from "next/image";
import { H6 } from "../CommonComponents/Typography/Headings";

const TestCards = ({ data }) => {
  return (
    <div className="rounded-md relative w-full ">
      <Image
        src={data.Img}
        alt={data.title}
        className="object-cover w-full rounded-md shadow-md mx-auto"
      />
      <div className="w-full bg-black rounded-b-lg absolute bottom-0 left-0 ring-0 p-3 text-white flex justify-between gap-1 box-border">
        <div>
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
