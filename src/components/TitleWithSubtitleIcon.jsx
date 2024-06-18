import { H4, H6 } from "./CommonComponents/Typography/Headings";

const TitleWithSubtitleIcon = ({ title, subTitle, Icon, IconSize=28 }) => {
  return (
    <div className="flex items-center gap-6">
      <Icon size={IconSize} />
      <div>
        <H4 text={title} />
        <span className="text-sm">{subTitle}</span>
      </div>
    </div>
  );
};

export default TitleWithSubtitleIcon;
