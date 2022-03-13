import ViewModel from "./ViewMode";

const Register = () => {
  const { onSubmit, registerProps, setRegisterProps } = ViewModel();
  return (
    <div>
      <div className="flex h-screen flex-col items-center justify-center">
        <form
          className="mx-auto flex max-w-[480px] flex-col gap-y-4 rounded border-[1px] border-neutral-500 p-4"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            className="mx-auto h-[40px] min-w-[320px] rounded border-[1px] p-2"
            placeholder="username"
            value={registerProps.username}
            onChange={(e) =>
              setRegisterProps({ ...registerProps, username: e.target.value })
            }
          />
          <input
            type="password"
            className="mx-auto h-[40px] min-w-[320px] rounded border-[1px] p-2"
            placeholder="password"
            value={registerProps.password}
            onChange={(e) =>
              setRegisterProps({ ...registerProps, password: e.target.value })
            }
          />
          <button
            type="submit"
            className="mx-auto h-[40px] w-[320px] rounded bg-primary-500 text-white"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
