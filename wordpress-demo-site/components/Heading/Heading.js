import { getFontSizeForHeading, getTextAlign } from "utils/fonts";
import React from "react";
export const Heading = ({ textAlign, content, level }) => {
  //textAlign: return the alignment of the text
  //level: return the type of heading(h1,h2,h3...)
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `max-w-5xl font-heading mx-auto my-5 ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
  });
  return tag;
};
