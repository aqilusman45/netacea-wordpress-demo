import { Cover } from "components/Cover";
import Image from "next/image";
import { Heading } from "components/Heading";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/heading": {
        <Cover key={block.id} children={block.attributes.content}></Cover>;
      }
      case "core/paragraph": {
        return (
          <Cover key={block.id} children={block.attributes.content}></Cover>
        );
      }

      case "core/image": {
        return <Cover key={block.id} background={block.attributes.url}></Cover>;
      }
      default:
        return null;
    }
  });
};
