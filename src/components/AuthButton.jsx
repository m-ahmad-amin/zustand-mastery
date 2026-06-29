const AuthButton = ({ handleClick, label }) => {
  return <button className={`${label === "Login" ? "bg-green-500" : "bg-red-500"} font-bold text-white p-2 rounded-lg w-20`} onClick={handleClick}>{label}</button>;
};

export default AuthButton;
