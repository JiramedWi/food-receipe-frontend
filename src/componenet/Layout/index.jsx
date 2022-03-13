import Navbar from "../Navbar";

const Layout = (props) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center border-2 border-red-600">
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
