import {  H6 } from "./Typography/Headings"

const SmallTitleWithIcon = ({data}) => {
  return (
    <div className="flex gap-4 items-center">
        <data.Icon size={28} />
        <H6 text={data.title} />
    </div>
  )
}

export default SmallTitleWithIcon