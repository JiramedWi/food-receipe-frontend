import { cx } from "@emotion/css";

const TextField = ({ type, placeholder, name, value, onChange, className }) => {
  return (
    <input
      type={type}
      name={name}
      className={cx(
        className,
        `mx-auto h-[40px] min-w-[320px] rounded border-[1px] p-2 outline-0 focus:!border-primary-500`
      )}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextField;
