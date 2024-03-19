import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.scss";
export const NavBar = ({ testimonials, blog, image }) => {
  console.log(image, testimonials, blog);
  return (
    <div className="w-full fixed top-0 left-0 z-20 border-b-[1px] border-[#0154A4] lg:border-b-[0px] bg-[#010D2E]">
      <div className="relative mx-auto flex w-full max-w-default items-center justify-between px-4 py-4 lg:px-16 lg:py-0 xl:px-108">
        <div className="flex items-center justify-between gap-10 lg:justify-start lg:gap-4 xl:gap-10">
          <Link href="#">
            <Image src={image} width={112} height={20} />
            {/* <NextImage {...logo} otherClasses="w-28 h-5" /> */}
          </Link>
          <div
            className={`${styles.mobile_nav_main_container} absolute left-0 top-[52px] flex w-full flex-col justify-between gap-10 overflow-auto bg-blue-600 px-4 py-10 lg:static lg:left-auto lg:top-auto lg:w-auto lg:gap-0 lg:overflow-visible lg:bg-transparent lg:px-0 lg:py-0`}
          >
            <ul className="flex flex-col items-center gap-6 lg:flex-row lg:gap-3 xl:gap-6 h-20">
              <li>
                <Link className="text-white text-base" href={testimonials?.url}>
                  {testimonials?.title}
                </Link>
              </li>
              <li>
                <Link className="text-white text-base" href={blog?.url}>
                  {blog?.title}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="flex items-center gap-3 xl:gap-6">
          <button className="hidden items-center gap-1 lg:flex">
            <IconWithCurrentColor icon="search-icon" className="h-4 w-4" />
            <span className="hidden font-aeronik-pro text-base text-white xl:block">
              Search
            </span>
          </button>
          {button?.map((node, i) => {
            return (
              <Button
                {...node}
                key={i}
                otherClasses={classNames(
                  'lg:flex hidden',
                  i === 0 && '',
                  i === 1 &&
                    ' [&>svg]:xs:block px-2 xs:px-4 py-1 xs:py-2 [&>svg]:hidden',
                )}
              />
            )
          })}
          <button
            className="flex h-4 w-4 flex-col items-center justify-center gap-1 overflow-hidden lg:hidden"
            onClick={() =>
              setState((prev) => ({
                ...prev,
                toggle: !state.toggle,
              }))
            }
          >
            <span
              className={classNames(
                'block h-[2px]   bg-white transition-all duration-300',
                state.toggle
                  ? 'w-4 translate-x-0 translate-y-[6px] rotate-[45deg]'
                  : 'w-[10px] translate-x-[3px]',
              )}
            ></span>
            <span
              className={classNames(
                'block h-[2px]  bg-white transition-all duration-300',
                state.toggle ? 'w-4 translate-x-10' : 'w-[10px]',
              )}
            ></span>
            <span
              className={classNames(
                'block h-[2px] bg-white transition-all duration-300',
                state.toggle
                  ? 'w-4 -translate-y-[6px] rotate-[-45deg]'
                  : 'w-[10px] translate-x-[-3px]',
              )}
            ></span>
          </button>
        </div> */}
      </div>
    </div>
  );
};
