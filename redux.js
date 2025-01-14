// Reducer

import { legacy_createStore } from "redux";

const cartReducer = (
  state = {
    cart: [{ id: 1, qty: 1 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// Store = menyimpan state

const store = legacy_createStore(cartReducer);
console.log("oncreate store :", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("onchange store :", store.getState());
});

// Dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 1 } };
store.dispatch(action1);

const action2 = { type: "ADD_TO_CART", payload: { id: 3, qty: 4 } };
store.dispatch(action2);
