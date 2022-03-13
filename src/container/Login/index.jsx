import Layout from "../../componenet/Layout";
import ViewModel from "./ViewMode";

const Login = () => {
  const { loginProps, setLoginProps, onSubmit } = ViewModel();
  return (
    <Layout>
      <form
        className="mx-auto flex max-w-[480px] flex-col gap-y-4 rounded border-[1px] border-neutral-500 p-4"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          className="mx-auto h-[40px] min-w-[320px] rounded border-[1px] p-2"
          placeholder="username"
          value={loginProps.username}
          onChange={(e) =>
            setLoginProps({ ...loginProps, username: e.target.value })
          }
        />
        <input
          type="password"
          className="mx-auto h-[40px] min-w-[320px] rounded border-[1px] p-2"
          placeholder="password"
          value={loginProps.password}
          onChange={(e) =>
            setLoginProps({ ...loginProps, password: e.target.value })
          }
        />
        <button
          type="submit"
          className="mx-auto h-[40px] w-[320px] rounded bg-primary-500 text-white"
        >
          Login
        </button>
        <button type="button">toast</button>
      </form>
    </Layout>
  );
};

export default Login;
