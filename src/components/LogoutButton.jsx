import useStore from "../store/useStore";
import AuthButton from "./AuthButton";

const LogoutButton = () => {
  const logout = useStore((state) => state.logout);
  return <AuthButton handleClick={logout} label="Logout" />
};

export default LogoutButton;
