import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./cover.module.scss";
export const Cover = (props) => {
  const { heading, image, sub_heading, side_image, title, button, buttonone } =
    props;
  const data = [];
  for (let i = 0; i < image; i++) {
    const imageKey = `image_${i}_image`;
    data.push({
      images: props[imageKey],
    });
  }
  return (
    <div className={`${styles.bg_styling}`}>
      <div className="mx-auto max-w-default px-4 lg:px-20 xl:px-108 ">
        <div className="flex flex-col items-center gap-6 py-14 lg:flex-row lg:py-20">
          <div className="w-full lg:w-2/4">
            <h2 className="text-[52px] font-aeronik-pro text-white">
              {heading}
            </h2>

            <p className="mt-6 mb-8 text-white">{sub_heading}</p>
            {/* <button onClick={button?.url}>{button?.title}</button> */}
            <div className="flex gap-4">
              <Link
                href={button?.url}
                className="bg-[#ABF57A] px-4 rounded text-[#001831] py-3"
              >
                {button?.title}
              </Link>
              <Link
                className="bg-transparent px-4 text-[#ABF57A] py-3 rounded border-[#ABF57A] border"
                href={buttonone?.url}
              >
                {buttonone?.title}
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-2/4">
            <Image
              src={side_image}
              className="w-full "
              width={420}
              height={290}
            />
          </div>
        </div>
        <div className="flex max-w-648 flex-col gap-6">
          <h5 className="text-white text-[24px]">{title}</h5>
          <div className="grid grid-cols-4 items-center gap-x-12 gap-y-6 pr-14 sm:flex sm:justify-between lg:pr-0 max-w-[648px]">
            {data?.map((node, i) => {
              return (
                <div key={i} className="w-auto h-[60] min-w-10">
                  {" "}
                  <Image src={node?.images} width={70} height={53} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
