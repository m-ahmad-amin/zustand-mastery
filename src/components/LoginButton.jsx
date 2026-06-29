import useStore from "../store/useStore";

const LoginButton = () => {
  const login = useStore((state) => state.login);
  return <button onClick={login}>Login</button>;
};

export default LoginButton;
