import React, { useReducer } from "react";

const initialState = {
  count: 0
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': return { ...state, count: state.count + 1 };
    case 'SUB': return { count: state.count - 1 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Итого: {state.count}
      <button onClick={() => dispatch({type: 'ADD'})}>Добавить</button>
      <button onClick={() => dispatch({type: 'SUB'})}>Вычесть</button>
    </>
  );
}

export default Counter;