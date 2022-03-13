import { Slide, toast } from "react-toastify";

export const successToast = (props) => {
  return toast(
    <div
      className="border-success-500 flex border-l-2 text-sm"
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
