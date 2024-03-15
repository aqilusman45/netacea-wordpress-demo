import Image from "next/image";
// import FooterLogo from "../../icons/footer-netacea-logo.svg";
import Link from "next/link";
export const Footer = ({ image }) => {
  console.log(image, "footer");
  return (
    <div className="max-w-[1512px] bg-[#001831] mx-auto pt-[44px] pb-[44px] pl-[21px] pr-[21px] xl:pl-[156px] xl:pr-[140px] xl:pt-[59px] xl:pb-[86px] ">
      <div className="grid  grid-cols-2 lg:grid-cols-5 gap-y-[49px] gap-x-[75px] md:gap-x-[50px]  md:gap-y-[50px] lg:gap-x-[68px] lg:gap-y-[68px] mb-[33px]">
        <Link href="#" className="col-span-2">
          {/* <Icon
        icon={FooterLogo}
        iconHeight={biggerThan1024 ? 48 : 66.09}
        iconWidth={biggerThan1024 ? 203 : 279}
      /> */}
          <Image src={image} width={88} height={88} />
        </Link>
        <div className="flex flex-col gap-6">
          <p className="text-white cursor-default font-inter text-base leading-6 font-semibold ">
            Company
          </p>
          <ul className="flex flex-col gap-3 ">
            <li className="text-white hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
              <Link href="#">About Us</Link>
            </li>
            <li className="text-white hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
              <Link href="#">Meet the Team</Link>
            </li>
            <li className="text-white hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
              <Link href="#">Solutions</Link>
            </li>
            {/* <li className="text-white  hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
          <Link to="/resources/testimonials">Testimonials</Link>
        </li> */}
            <li className="text-white hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 ">
          <p className="text-white cursor-default font-inter text-base leading-6 font-semibold ">
            <Link href="#">Solutions</Link>
          </p>
          <ul className="flex flex-col gap-3 ">
            <li className="text-white hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
              <Link href="#">Rail & Transit Management</Link>
            </li>
            <li className="text-white hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
              <Link href="#">Fleet Management</Link>
            </li>
            <li className="text-white hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
              <Link href="#">IOT / Smart City</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 mobile_footer_area">
          <p className="cursor-default text-white font-inter text-base leading-6 font-semibold ">
            Contact
          </p>
          <ul className="flex flex-col gap-3 ">
            <li className="text-white  opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
              95 Pinon Trail <br /> Cedar Crest, NM 87008
            </li>
            <li className="text-white hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
              <a href="tel:8339362832">(833) 936-2832</a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="relative mt-[33px] after:absolute after:left-0 after:w-full after:h-[1px] after:bg-[#4F5EAC] after:top-[0px]">
        <div className="flex items-center justify-center lg:justify-between flex-col-reverse lg:flex-row pt-[33.5px]">
          <ul className="flex flex-col justify-center items-center lg:flex-row gap-4">
            <li className="text-primary_dark_blue_1/[0.70]   font-inter text-[14px] font-normal leading-[20px] ">
              @{Year} XenaTech{" "}
            </li>
            <li className="text-primary_dark_blue_1/[0.70] hover:text-primary_blue_600  font-inter text-[14px] font-normal leading-[20px] ">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="">
              <a
                className="flex gap-[5.71px]"
                href="https://www.wisedigitalpartners.com/nest-by-wise/"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-primary_dark_blue_1/[0.70]  font-inter text-[14px] font-normal leading-[20px] ">
                  Powered by
                </p>
                <Icon icon="nest-logo" iconHeight={20.001} iconWidth={75.496} />
              </a>
            </li>
          </ul>
          <div className="pb-[33px] lg:pr-4">
            <a
              href="https://www.linkedin.com/in/jeanne-woodfin-28720518/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="linkedin-blue" iconHeight={20} iconWidth={20} />
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};
