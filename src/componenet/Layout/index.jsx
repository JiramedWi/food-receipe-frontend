import { cx } from "@emotion/css";
import Navbar from "../Navbar";

const Layout = ({ children, className }) => {
  return (
    <div
      className={cx(
        className,
        `flex h-screen flex-col items-center justify-center pb-8`
      )}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
