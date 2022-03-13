import { cx } from "@emotion/css";

const BaseButton = ({ type, onClick, disabled, children, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disbaled={disabled}
      className={cx(className, `mx-auto h-[40px] w-[320px] rounded outline-0`)}
    >
      {children}
    </button>
  );
};

export default BaseButton;
