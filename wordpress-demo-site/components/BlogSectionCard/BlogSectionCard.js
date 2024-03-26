import Image from "next/image";
import Link from "next/link";
import styles from "./BlogSectionCard.module.scss";
export const BlogSectionCard = ({ image, text, title, date, button, sub }) => {
  return (
    <div className={`${styles.featured_card_container_main}`}>
      <div
        className={`group ${styles.featured_card_container} h-full flex flex-col`}
      >
        <Image
          src={image}
          width={500}
          height={500}
          otherClasses="w-full rounded-t min-h-282 h-282"
        />
        <div
          className={`${styles.featured_blog_card_inner} h-full w-full rounded-b transition-all duration-400`}
        >
          <div className="flex h-full w-full flex-col justify-between gap-10 rounded-b-[3px] bg-white p-6">
            <div>
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>
                    {/* <IconWithCurrentColor
                    icon="file-icon"
                    className="[&>path]:stroke-current"
                  /> */}
                  </span>
                  <p className="text-xs font-normal text-[#001831]">{title}</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-sm leading-normal text-[#001831]">
                    {date}
                  </p>
                </div>
              </div>
              <h4 type="h4" otherClasses="text-[#001831] text-2xl">
                {text}
              </h4>
              {/* <RichText richText={subDescription} otherClasses="mt-6" /> */}
              <p className="text-base mt-6 text-[#001831]">{sub}</p>
            </div>
            {/* <Button label="Read Now" variant="text-link-arrow" mode="light" /> */}
            <Link className="text-[#216ef2]" href={`blog/${button}`}>
              Read
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
