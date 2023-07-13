import useCounter from "../hooks/countHook";

function UseCount() {
  const { count, increment } = useCounter(0);
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default UseCount;
