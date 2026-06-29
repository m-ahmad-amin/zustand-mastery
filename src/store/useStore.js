import { create } from "zustand";

const useStore = create((set) => ({
  isLoggedIn: false,
  theme: "dark",
  count: 0,
  incrementCount: () => set((prev) => ({ count: prev.count + 1 })),
  toggleTheme: () =>
    set((prev) => ({ theme: prev.theme === "dark" ? "light" : "dark" })),
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
}));

export default useStore;
