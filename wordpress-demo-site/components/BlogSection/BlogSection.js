import { BlogSectionCard } from "components/BlogSectionCard";
import Image from "next/image";
import styles from "./BlogSection.module.scss";
export const BlogSection = (props) => {
  const { heading, card } = props;
  const data = [];
  for (let i = 0; i < card; i++) {
    const imageKey = `card_${i}_image`;
    const textKey = `card_${i}_heading`;
    const titleKey = `card_${i}_title`;
    const dateKey = `card_${i}_date`;
    const buttonKey = `card_${i}_button`;
    const subKey = `card_${i}_sub_heading`;
    data.push({
      image: props[imageKey],
      text: props[textKey],
      title: props[titleKey],
      date: props[dateKey],
      button: props[buttonKey],
      sub: props[subKey],
    });
  }
  console.log(data, "new props");
  return (
    <div className={`${styles.featured_blog_dark_back} py-14`}>
      <div className="mx-auto w-full max-w-default  px-4 lg:px-20 xl:px-108">
        <div className="mb-8 flex items-start justify-between lg:mb-14">
          <h3 className="text-[32px] text-white">{heading}</h3>
          {/* <Button {...button} mode={variant} otherClasses="hidden md:flex" /> */}
        </div>
        <div
          className={`  grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3`}
        >
          {data?.map((node, i) => {
            return <BlogSectionCard key={i} {...node} />;
          })}
        </div>
        {/* <Button
        {...button}
        mode={variant}
        otherClasses="w-full !justify-center lg:justify-start mt-4 md:hidden"
      /> */}
      </div>
    </div>
  );
};
