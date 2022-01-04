import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const incrementCounter = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrementCounter = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <div>
      <h3>Count: {state.count}</h3>
      <button onClick={incrementCounter}>INCREMENT</button>
      <button onClick={decrementCounter}>DECREMENT</button>
    </div>
  );
};

export default Counter;
