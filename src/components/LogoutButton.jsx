import useStore from "../store/useStore";

const LogoutButton = () => {
  const logout = useStore((state) => state.logout);
  return <button onClick={logout}>logout</button>;
};

export default LogoutButton;
