import { ADD_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
  console.log("reducer action", action.data);

  if (action.type === ADD_TO_CART) {
    return action.data;
  }

  return "abc";
};
