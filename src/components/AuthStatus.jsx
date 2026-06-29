import useStore from "../store/useStore";

const AuthStatus = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  return <p>You are {!isLoggedIn && "not "}logged in.</p>;
};

export default AuthStatus;
