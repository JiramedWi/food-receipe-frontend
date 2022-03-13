import { Slide, toast } from "react-toastify";

export const successToast = (props) => {
  return toast(
    <div className="flex text-sm" key={`${props.content}`}>
      <div className="flex h-[70px] w-[70px] items-center justify-center border-r border-r-neutral-100">
        x
      </div>
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
