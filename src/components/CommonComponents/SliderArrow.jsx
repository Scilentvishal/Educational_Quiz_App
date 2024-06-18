import { IoIosArrowBack } from "react-icons/io";

const SliderArrow = ({className}) => {
  return (
    <div className={`p-3 cursor-pointer ${className}`}>
        <IoIosArrowBack size={24} />
    </div>
  )
}

export default SliderArrow