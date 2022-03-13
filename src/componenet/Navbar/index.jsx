import { cx, css } from "@emotion/css";
import { Link, useLocation } from "react-router-dom";
import { useContextAuthManager } from "../../authentication";

const navbarItem = [
  { title: "Home", path: "/" },
  { title: "Bookmark", path: "/bookmark" },
];

const Navbar = () => {
  const { setIsLoggedIn } = useContextAuthManager();
  const location = useLocation();

  return (
    <div className="fixed top-0 z-50 flex h-[80px] w-full items-center bg-primary-900 p-4">
      <div className="flex w-full justify-between">
        <div className="flex gap-x-4">
          {navbarItem.map((item) => (
            <Link key={item.title} to={item.path}>
              <span
                className={cx(
                  location.pathname === item.path && "!text-white",
                  `ease duration-600 text-lg transition hover:text-white`,
                  css`
                    color: #808080;
                  `
                )}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>

        <div>
          <button
            className="text-lg font-semibold text-white"
            onClick={() => {
              setIsLoggedIn(false);
              localStorage.clear();
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
