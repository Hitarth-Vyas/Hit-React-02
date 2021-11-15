import { createStore } from "redux";
import { INCREMENT } from "../components/Counter";

const initialState = { counter: 0, showCounter: true }

const counterRedux = (state = initialState, actions) => {
  if (actions.type === INCREMENT) {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    }
  }

  if (actions.type === 'increase') {
    return {
      counter: state.counter + actions.amount,
      showCounter: state.showCounter,
    }
  }
  
  if (actions.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    }
  }

  if (actions.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    }
  }

  return state;
};

const store = createStore(counterRedux);

export default store;