import Image from "next/image";

export const Cover = ({ children, background }) => {
  return (
    <div className="flex gap-2">
      {children}
      <Image src={background} className="bg-cover" width={100} height={100} />
    </div>
  );
};
