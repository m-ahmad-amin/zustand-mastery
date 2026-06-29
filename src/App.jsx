import AuthStatus from "./components/AuthStatus";
import Counter from "./components/Counter";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import useStore from "./store/useStore";
import { useShallow } from "zustand/shallow";

const App = () => {
  const { isLoggedIn, theme, toggleTheme } = useStore(
    useShallow((state) => ({
      isLoggedIn: state.isLoggedIn,
      theme: state.theme,
      toggleTheme: state.toggleTheme,
    })),
  );
  console.log("App Component Rendered");
  return (
    <div>
      <AuthStatus />
      {isLoggedIn ? <LogoutButton /> : <LoginButton />}
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Counter />
    </div>
  );
};

export default App;
