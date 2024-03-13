import { Cover } from "components/Cover";
import Image from "next/image";
import { Heading } from "components/Heading";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "acf/herosectiontwocolumn":
        return <Cover key={block.id} {...block?.attributes?.data} />;

      default:
        return null;
    }
  });
};
