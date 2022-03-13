import { useNavigate } from "react-router-dom";
import BaseButton from "../../componenet/Button";
import PrimaryButton from "../../componenet/Button/PrimaryButton";
import TextField from "../../componenet/Input";
import ViewModel from "./ViewMode";

const Login = () => {
  const navigate = useNavigate();
  const { loginProps, setLoginProps, onSubmit } = ViewModel();
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <form
        className="mx-auto flex max-w-[480px] flex-col gap-y-4 rounded border-[1px] border-neutral-500 p-4"
        onSubmit={onSubmit}
      >
        <TextField
          type="text"
          placeholder="username"
          value={loginProps.username}
          onChange={(e) =>
            setLoginProps({ ...loginProps, username: e.target.value })
          }
        />
        <TextField
          type="password"
          placeholder="password"
          value={loginProps.password}
          onChange={(e) =>
            setLoginProps({ ...loginProps, password: e.target.value })
          }
        />
        <PrimaryButton
          type="submit"
          className="mx-auto h-[40px] w-[320px] rounded bg-primary-500 text-white"
        >
          Login
        </PrimaryButton>
        <BaseButton type="button" onClick={() => navigate("/register")}>
          Register
        </BaseButton>
      </form>
    </div>
  );
};

export default Login;
