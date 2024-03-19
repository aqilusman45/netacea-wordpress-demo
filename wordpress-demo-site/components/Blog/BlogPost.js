import Image from "next/image";
import RichText from "../RichText/RichText";
import styles from "./BlogPost.module.scss";
export const BlogPost = (props) => {
  const { title, content, authorImage, featuredImage } = props;
  console.log(title, content, authorImage, featuredImage);
  return (
    <div className={`${styles.background}`}>
      <div className="max-w-[1512px] pt-20 mx-auto xl:px-[156px] px-6 lg:px-20 relative z-10">
        <div className="max-w-[800px] mx-auto mb-[46px]">
          <h1 className="font-Rubik text-[52px] font-bold  text-white mb-8 text-left">
            {title}
          </h1>
          <div className="flex items-start justify-between">
            <div className="flex items-center justify-start">
              <div className="flex  items-center justify-center gap-[14px] mb-4 lg:mb-0">
                {authorImage && (
                  <Image
                    src={authorImage?.authorImage?.sourceUrl}
                    className="w-12 h-12 rounded-full"
                    width={24}
                    height={24}
                  />
                )}
                <div>
                  {/* <p className="font-Mulish leading-5 tracking-[0.42px] uppercase font-semibold text-sm text-white mb-1 lg:text-left">
                    {authors?.name}
                  </p> */}
                  {/* <p className="font-Mulish leading-5 text-sm text-[#e4f1ff] lg:text-left">
                    {publishedAt && publishedAt}
                  </p> */}
                </div>
              </div>
            </div>
            {/* <div className="flex items-center gap-6 justify-center">
              {shareButtons}
            </div> */}
          </div>
        </div>
        <div className="w-full lg:max-w-[1200px]">
          <Image
            src={featuredImage?.node?.sourceUrl}
            alt="blog"
            width={200}
            height={200}
            className="w-full object-fill"
          />
        </div>

        <div
          className={`${styles.blog_post_section_rich_text} w-full lg:max-w-[800px] mx-auto my-10 lg:my-20`}
        >
          <RichText
            content={content}
            className={`${styles.blog_post_rich_text} text-white `}
          />
        </div>
      </div>
      {/* <div className="pt-[66px] px-6 lg:px-0 mx-auto bg-primary_dark_blue_1">
        <SubscribeForm />
      </div> */}
    </div>
  );
};
