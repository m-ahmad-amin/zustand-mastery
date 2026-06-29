import useStore from "../store/useStore";

const AuthStatus = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  return (
    <div className="flex justify-center items-center w-full">
      <p className="font-medium text-lg">You are {!isLoggedIn && "not "}logged in.</p>
    </div>
  );
};

export default AuthStatus;
