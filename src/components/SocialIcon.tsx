import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";

type SocialIconProps = {
  url: string;
  icon: IconDefinition;
  size: SizeProp;
};
const SocialIcon: FC<SocialIconProps> = ({
  url,
  icon,
  size,
}: SocialIconProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="mx-1 hover:text-green-600 hover:text-opacity-60"
    >
      <FontAwesomeIcon icon={icon} size={size} />
    </a>
  );
};

export default SocialIcon;
