import { useState } from "react";
import { useContextAuthManager } from "../../authentication";
import { errorToast } from "../../componenet/Toast/ErrorToast";
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
        .then((response) => {
          localStorage.setItem('id', response.data.id)
          localStorage.setItem("username", response.data.username);
          setUser({
            id: response.data.id,
            username: response.data.username
          });
          setIsLoggedIn(true);
        })
        .then(() =>
          successToast({
            content: (
              <>
                <p className="mb-[2px] font-semibold text-neutral-900">Log in</p>
                <p className="mt-[2px] text-neutral-700">You are logged in.</p>
              </>
            ),
          })
        )
        .catch((err) => {
          console.log("err", err);
          errorToast({
            content: (
              <>
                <p className="mb-[2px] font-semibold text-neutral-900">Errors</p>
                <p className="mt-[2px] text-neutral-700">
                  Something wrong, please try again.
                </p>
              </>
            ),
          });
        });
    } else {
      errorToast({
        content: (
          <>
            <p className="mb-[2px] font-semibold text-neutral-900">Error</p>
            <p className="mt-[2px] text-neutral-700">
              Please input username and password to login.
            </p>
          </>
        ),
      });
    }
  };

  return { loginProps, setLoginProps, onSubmit };
};

export default ViewModel;
