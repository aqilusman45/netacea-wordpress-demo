import Image from "next/image";
// import FooterLogo from "../../icons/footer-netacea-logo.svg";
import Link from "next/link";
export const Footer = ({ image }) => {
  console.log(image, "footer");
  return (
    <div className="max-w-[1512px] bg-[#001831] mx-auto pt-[44px] pb-[44px] pl-[21px] pr-[21px] xl:pl-[156px] xl:pr-[140px] xl:pt-[59px] xl:pb-[86px] ">
      <div className="grid  grid-cols-2 lg:grid-cols-5 gap-y-[49px] gap-x-[75px] md:gap-x-[50px]  md:gap-y-[50px] lg:gap-x-[68px] lg:gap-y-[68px] mb-[33px]">
        <Link href="#" className="col-span-2">
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
    </div>
  );
};
