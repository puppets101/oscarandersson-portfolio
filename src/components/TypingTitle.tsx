import React, { FC, Fragment } from "react";
import Typewriter from "typewriter-effect";

type TypingTitleProps = {
  title: string;
  classes: string;
};
const TypingTitle: FC<TypingTitleProps> = ({
  title,
  classes,
}: TypingTitleProps) => {
  return (
    <Fragment>
      <span className={classes}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(title).start();
          }}
        />
      </span>
    </Fragment>
  );
};

export default TypingTitle;
