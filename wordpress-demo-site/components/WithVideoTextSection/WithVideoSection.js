import ModalComponent from "components/ModalComponent/ModalComponent";
import styles from "./video-with-text-section.module.scss";
import { ReactComponent as CancelModalIcon } from "icons/cancel-modal.svg";
import { useState } from "react";
import ReactPlayer from "react-player";
export const WithVideoSection = (props) => {
  const { text, video, video_url } = props;
  const [show, setShow] = useState(false);

  const handleCancel = () => {
    setShow(false);
  };
  return (
    <div className={`relative ${styles.video_with_text_container}`}>
      <div className="relative mx-auto w-full max-w-default px-4 lg:px-6">
        <div
          className={`${styles.video_inner_container} relative flex flex-col-reverse items-center gap-120 px-4 pb-152 pt-282 lg:flex-row lg:px-20 lg:py-0`}
        >
          <video
            autoPlay
            controls={false}
            playsInline
            loop
            muted
            src={video}
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
          <div className="relative w-full pt-6 lg:w-2/4 lg:pt-0">
            <h2 className="text-white text-[46px]">{text}</h2>
          </div>
          <div className="relative z-10 w-full pb-30 lg:h-710 lg:w-2/4 lg:py-20 lg:pb-0">
            <button
              onClick={() => setShow(true)}
              className={`${styles.videoPlay_wrapper} absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]`}
            >
              <div className={`${styles.videoPlay}`}>
                <div className={`${styles.videoPlay_inner_wrapper}`}>
                  <div className={`${styles.videoPlay_inner}`}></div>
                </div>
                <svg
                  className={`${styles.icon_videoPlay}`}
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.5442 67.0885C52.0702 67.0885 67.0885 52.0702 67.0885 33.5442C67.0885 15.0183 52.0702 0 33.5442 0C15.0183 0 0 15.0183 0 33.5442C0 52.0702 15.0183 67.0885 33.5442 67.0885ZM47.6819 35.6574C49.0991 34.8543 49.0991 32.8125 47.6819 32.0094L28.0051 20.8592C26.6075 20.0673 24.875 21.0769 24.875 22.6833L24.875 44.9836C24.875 46.59 26.6075 47.5995 28.0051 46.8076L47.6819 35.6574Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* <ModalComponent
        otherClasses=""
        additionalClass="px-4 lg:px-0 max-w-800 w-full"
        handleClose={handleCancel}
      >
        <div className="mx-auto flex  flex-col items-center justify-center gap-6 text-white">
          <div className="flex w-full justify-between text-white">
            <h4 otherClasses="text-white w-[95%] text-[20px]">title</h4>
            <button
              onClick={() => setShow(false)}
              className="mt-2 flex w-[5%] items-start
             justify-end"
            >
              <CancelModalIcon className="h-[18px] w-[18px]" />
            </button>
          </div>
          <div className="player-wrapper h-full w-full">
            <ReactPlayer
              url={video_url}
              controls
              width="100%"
              playing={show}
              playsinline
              height={377}
              className="video-with-text-react-player aspect-video !h-auto !w-full [&>div>iframe]:aspect-video [&>div>iframe]:w-full"
            />
          </div>
        </div>
      </ModalComponent> */}
    </div>
  );
};
