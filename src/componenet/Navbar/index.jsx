import { Link } from "react-router-dom";
import { useContextAuthManager } from "../../authentication";

const Navbar = () => {
  const { setIsLoggedIn } = useContextAuthManager();

  return (
    <div className="fixed top-0 flex h-[80px] w-full items-center bg-primary-900 p-4">
      <div className="flex w-full justify-between">
        <div className="flex gap-x-4">
          <Link to="/">
            <span className="font-medium text-white">Home</span>
          </Link>
          <Link to="/bookmark">
            <span className="font-medium text-white">Bookmark</span>
          </Link>
        </div>

        <div>
          <button
            className="font-medium text-white"
            onClick={() => setIsLoggedIn(false)}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
