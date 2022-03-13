import { Slide, toast } from "react-toastify";

export const errorToast = (props) => {
  return toast(
    <div
      className="flex border-l-2 border-error-500 text-sm"
      key={`${props.content}`}
    >
      <div className="p-4">{props.content}</div>
    </div>,
    {
      autoClose: 3000,
      hideProgressBar: true,
      transition: Slide,
      closeOnClick: false,
    }
  );
};
