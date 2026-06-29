import AuthStatus from "./components/AuthStatus";
import Counter from "./components/Counter";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import useStore from "./store/useStore";
import { useShallow } from "zustand/shallow";

const App = () => {
  const { user, loading, isLoggedIn, theme, toggleTheme } = useStore(
    useShallow((state) => ({
      isLoggedIn: state.isLoggedIn,
      loading: state.loading,
      user: state.user,
      theme: state.theme,
      toggleTheme: state.toggleTheme,
    })),
  );
  console.log("App Component Rendered");
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-5 bg-orange-300">
      <AuthStatus />
      {isLoggedIn && <p>User: {user}</p>}
      {loading && <p>Loading...</p>}
      {/* {isLoggedIn ? <LogoutButton /> : <LoginButton />} */}
      <div className="flex">
        <LoginButton />
        &nbsp;
        <LogoutButton />
      </div>
      <p>Theme: {theme}</p>
      <button className="bg-fuchsia-700 p-3 rounded-lg text-white cursor-pointer hover:bg-fuchsia-600 transition-all duration-100" onClick={toggleTheme}>Toggle Theme</button>
      <Counter />
    </div>
  );
};

export default App;
