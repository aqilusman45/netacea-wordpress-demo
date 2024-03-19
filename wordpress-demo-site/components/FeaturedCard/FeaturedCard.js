import Image from "next/image";
import Link from "next/link";
import styles from "./featuredcard.module.scss";
export const FeaturedCard = ({ image, title, button, description }) => {
  return (
    <div>
      <div
        className={`${styles.featured_card_container} group flex h-full min-h-[330px] flex-col justify-between gap-14 rounded-[3px] p-6 transition-all duration-400`}
      >
        <div>
          <div className="w-fit rounded border-[1px] border-blue-300 p-4 text-blue-300 backdrop-blur transition-all duration-400 group-hover:bg-blue-300 group-hover:text-white">
            {/* <IconWithCurrentColor
              icon={icon}
              className={classnames(
                "h-auto w-auto [&>g>path]:stroke-current [&>path]:stroke-current ",
                icon === "carding-fraud" &&
                  "group-hover:last:[&>path]:fill-white"
              )}
            /> */}
            <Image alt="image" src={image?.url} width={34} height={34} />
          </div>
          {/* <NextImage {...icon} otherClasses="w-12 h-12 " /> */}
          <h4 className="mt-5 mb-4 text-3xl text-blue">{title}</h4>
          <p className="text-base text-[#001831]">{description}</p>
          {/* <RichText richText={subText} /> */}
        </div>
        {/* <Button {...button} mode="light" /> */}
        <Link
          className="bg-transparent text-base text-blue-300 font-aeronik-pro hover:text-blue-200 "
          href={button?.url}
        >
          {button?.title}
        </Link>
      </div>
    </div>
  );
};
