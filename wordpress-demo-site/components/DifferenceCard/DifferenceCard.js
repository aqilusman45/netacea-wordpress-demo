import classNames from "classnames";
import RichText from "../RichText/RichText";
import Image from "next/image";
import styles from "./differenceCard.module.scss";
export const DifferenceCard = ({ cards, text, title }) => {
  console.log(cards, "cards");

  return (
    <div
      className={`flex h-full flex-col gap-6 rounded-[3px] p-6 transition-all duration-300  bg-[#113161]`}
    >
      <Image src={cards?.url} width={48} height={48} />
      <h4 className="text-2xl text-white">{title}</h4>
      <p className="text-base text-white">{text}</p>
    </div>
  );
};
