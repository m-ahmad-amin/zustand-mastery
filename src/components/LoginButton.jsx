import useStore from "../store/useStore";
import AuthButton from "./AuthButton";

const LoginButton = () => {
  const login = useStore((state) => state.login);
  return <AuthButton handleClick={() => login(10)} label="Login" />
};

export default LoginButton;
