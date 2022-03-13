import { cx } from "@emotion/css";
import BaseButton from ".";

const PrimaryButton = ({ type, onClick, disabled, children, className }) => {
  return (
    <BaseButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cx(
        className,
        `duration-600 bg-primary-500 text-white transition-colors hover:bg-primary-700 active:bg-primary-900`
      )}
    >
      {children}
    </BaseButton>
  );
};

export default PrimaryButton;
