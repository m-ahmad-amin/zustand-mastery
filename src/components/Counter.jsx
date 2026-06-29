import useStore from "../store/useStore";
import { useShallow } from "zustand/shallow";

const Counter = () => {
  const { count, incrementCount } = useStore(
    useShallow((state) => ({
      count: state.count,
      incrementCount: state.incrementCount,
    })),
  );
  console.log("Counter Component Rendered");
  return (
    <div>
      <p className="font-bold text-center pb-4 text-lg">Count: {count}</p>
      <button className="bg-gray-600 py-4 px-6 rounded-lg text-white cursor-pointer hover:bg-gray-500 transition-all duration-150" onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default Counter;
