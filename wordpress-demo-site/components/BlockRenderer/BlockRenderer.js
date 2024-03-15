import { Cover } from "components/Cover";
import Image from "next/image";
import { Heading } from "components/Heading";
import { DifferenceSection } from "components/Difference-Section/difference-section";
import { WithVideoSection } from "components/WithVideoTextSection/WithVideoSection";
import { BlogSection } from "components/BlogSection";
import { NavBar } from "components/NavBar";
import { Footer } from "components/Footer";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    console.log(block, "block");
    switch (block.name) {
      case "acf/navbar":
        return <NavBar key={block.id} {...block?.attributes?.data} />;
      case "acf/herosectiontwocolumn":
        return <Cover key={block.id} {...block?.attributes?.data} />;
      case "acf/differencesection":
        return (
          <DifferenceSection key={block.id} {...block?.attributes?.data} />
        );
      case "acf/videosection":
        return (
          <WithVideoSection key={block?.id} {...block?.attributes?.data} />
        );
      case "acf/blogsection":
        return <BlogSection key={block.id} {...block?.attributes?.data} />;
      case "acf/footer":
        return <Footer key={block?.id} {...block?.attributes?.data} />;
      default:
        return null;
    }
  });
};
