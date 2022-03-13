import { useState } from "react";
import { useContextAuthManager } from "../../authentication";
import { successToast } from "../../componenet/Layout/Toast/SuccessToast";

const ViewModel = () => {
  const [loginProps, setLoginProps] = useState({ username: "", password: "" });
  const { setIsLoggedIn } = useContextAuthManager();

  const onSubmit = (e) => {
    e.preventDefault();

    if (loginProps.username && loginProps.password) {
      setIsLoggedIn(true);
      successToast({
        content: (
          <>
            <p className="mb-[2px] font-semibold text-gray-900">Log in</p>
            <p className="mt-[2px] text-gray-700">You are logged in.</p>
          </>
        ),
      });
    } else {
      alert("please input username & password to login");
    }
  };

  return { loginProps, setLoginProps, onSubmit };
};

export default ViewModel;
