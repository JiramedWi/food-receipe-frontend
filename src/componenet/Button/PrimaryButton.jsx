import { cx } from "@emotion/css";
import BaseButton from ".";

const PrimaryButton = ({ type, onClick, disabled, children, className }) => {
  return (
    <BaseButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cx(className, `bg-primary-500 text-white`)}
    >
      {children}
    </BaseButton>
  );
};

export default PrimaryButton;
