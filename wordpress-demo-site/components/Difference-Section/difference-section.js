import { DifferenceCard } from "components/DifferenceCard";
// import { imageOne } from "../../public/images/difference-section-background.png";
import Image from "next/image";
import styles from "./differenceSection.module.scss";

export const DifferenceSection = (props) => {
  const { heading, card } = props;
  const data = [];
  for (let i = 0; i < card; i++) {
    const imageKey = `card_${i}_icon`;
    const textKey = `card_${i}_subtext`;
    const titleKey = `card_${i}_title`;
    data.push({
      cards: props[imageKey],
      text: props[textKey],
      title: props[titleKey],
    });
  }

  return (
    <div className={`${styles.background_gradient_difference_section} py-20`}>
      {/* <Image
        src={image}
        width={1229}
        height={604}
        className="absolute right-0 top-0 hidden h-full w-3/4 lg:block"
        alt="background"
      /> */}
      <div className="relative mx-auto max-w-default px-4 lg:px-20 xl:px-108">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <h3 className="text-[32px] text-white">{heading}</h3>
          {/* <Button {...button} mode={variant} otherClasses="lg:flex hidden" /> */}
        </div>
        <div className="grid grid-cols-1 items-stretch gap-10 pt-14 md:grid-cols-2 lg:grid-cols-3 ">
          {data?.map((node, index) => {
            return <DifferenceCard key={index} {...node} />;
          })}
        </div>
        {/* <Button
          {...button}
          mode={variant}
          otherClasses="lg:hidden mt-4 w-full !justify-center"
        /> */}
      </div>
    </div>
  );
};
