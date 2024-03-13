import Image from "next/image";
export const Cover = ({ heading, sub_heading, image }) => {
  return (
    <div className="bg-styling">
      <div className="flex  gap-6 lg:flex-row flex-col mx-4 lg:mx-[80px] xl:mx-[128px]  2xl:mx-auto max-w-[1440px] py-[120px] ">
        <div className="lg:w-2/4 flex flex-col gap-4 justify-center">
          <h2 className="text-[52px] leading-[52px] text-white">{heading}</h2>
          <p className="text-xl text-white">{sub_heading}</p>
          <div className="flex"></div>
        </div>
        <Image
          src={image}
          width={515}
          height={356}
          className="lg:w-2/4 mx-auto"
        />
      </div>
    </div>
  );
};
