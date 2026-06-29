import useStore from "../store/useStore";

const LoginButton = () => {
  const login = useStore((state) => state.login);
  return <button onClick={() => login(10)}>Login</button>;
};

export default LoginButton;
