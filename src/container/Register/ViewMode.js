import { useState } from "react";
import { successToast } from "../../componenet/Toast/SuccessToast";
import { errorToast } from "../../componenet/Toast/ErrorToast";
import { registerApi } from "../../service/register";
import { useNavigate } from "react-router-dom";

const ViewModel = () => {
  const [registerProps, setRegisterProps] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (registerProps.username && registerProps.password) {
      const payload = {
        username: registerProps.username,
        password: registerProps.password,
      };

      registerApi(payload)
        .then((response) => {
          successToast({
            content: (
              <>
                <p className="mb-[2px] font-semibold text-gray-900">Register</p>
                <p className="mt-[2px] text-gray-700">Register successfully</p>
              </>
            ),
          });
          navigate("/login");
        })
        .catch((err) => {
          alert(err)
        });
    } else {
      errorToast({
        content: (
          <>
            <p className="mb-[2px] font-semibold text-gray-900">Register</p>
            <p className="mt-[2px] text-gray-700">
              Please input username and password to register.
            </p>
          </>
        ),
      });
    }
  };

  return { registerProps, setRegisterProps, onSubmit };
};

export default ViewModel;
