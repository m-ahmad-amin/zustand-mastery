import { create } from "zustand";

const useStore = create((set, get) => ({
  isLoggedIn: false,
  theme: "dark",
  count: 0,
  user: null,
  loading: false,
  error: null,
  incrementCount: () => set((prev) => ({ count: prev.count + 1 })),
  toggleTheme: () =>
    set((prev) => ({ theme: prev.theme === "dark" ? "light" : "dark" })),
  login: async (id) => {
    const isLoggedIn = get().isLoggedIn;
    if (isLoggedIn) {
      alert("Already logged in");
      return;
    }
    set({ loading: true, error: null });
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      const data = await res.json();
      set({ user: data.name, loading: false, isLoggedIn: true });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  logout: () => {
    const isLoggedIn = get().isLoggedIn;
    if (!isLoggedIn) {
      alert("Already locked out");
      return;
    }
    set({ user: null, isLoggedIn: false });
  },
}));

export default useStore;
