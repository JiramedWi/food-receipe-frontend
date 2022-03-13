import { cx } from "@emotion/css";
import Navbar from "../Navbar";

const Layout = ({ children, className }) => {
  return (
    <div
      className={cx(
        className,
        `flex flex-col justify-center pb-8`
      )}
    >
      <Navbar />
     <div className="mt-[80px]">{children}</div>
    </div>
  );
};

export default Layout;
