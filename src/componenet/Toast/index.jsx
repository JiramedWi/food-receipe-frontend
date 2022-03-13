import { css, cx } from "@emotion/css";
import { ToastContainer } from "react-toastify";
// import { ReactComponent as CloseIcon } from 'clientAssets/icons/closeIcon.svg';

const CloseButton = ({ closeToast }) => (
  <div onClick={closeToast} className="mt-4 mr-4">
    x
  </div>
);

export const BaseToastContainer = () => {
  return (
    <ToastContainer
      style={{ width: "490px" }}
      toastClassName={() =>
        cx(
          css`
            box-shadow: 0px 4px 24px rgba(13, 39, 55, 0.15);
          `,
          "relative flex min-h-[70px] rounded justify-between overflow-hidden cursor-pointer w-screen max-w-[490px] bg-white"
        )
      }
      bodyClassName={() => "p-0"}
      position="top-right"
      closeButton={CloseButton}
      autoClose={false}
    />
  );
};
