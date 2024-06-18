import { H4 } from "./Typography/Headings"

const TitleWithIcon = ({text, Icon}) => {
  return (
    <div className="flex items-center gap-2">
        <Icon size={24} />
          <H4 text={text} /> 
    </div>
  )
}

export default TitleWithIcon