import { useState } from "react";
import { useContextAuthManager } from "../../authentication";
import { successToast } from "../../componenet/Toast/SuccessToast";
import { loginApi } from "../../service/login";

const ViewModel = () => {
  const [loginProps, setLoginProps] = useState({ username: "", password: "" });
  const { setIsLoggedIn, setUser } = useContextAuthManager();

  const onSubmit = (e) => {
    e.preventDefault();

    if (loginProps.username && loginProps.password) {
      const payload = {
        username: loginProps.username,
        password: loginProps.password,
      };

      loginApi(payload)
        .then(response => {
          localStorage.setItem("username", response.data.username)
          setUser({ username: response.data.username })
          setIsLoggedIn(true)
        })
        .then(() => successToast({
          content: (
            <>
              <p className="mb-[2px] font-semibold text-gray-900">Log in</p>
              <p className="mt-[2px] text-gray-700">You are logged in.</p>
            </>
          ),
        }))
        .catch(err => console.log('err', err))

    } else {
      alert("please input username & password to login");
    }
  };

  return { loginProps, setLoginProps, onSubmit };
};

export default ViewModel;
