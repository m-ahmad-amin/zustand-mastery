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
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default Counter;
