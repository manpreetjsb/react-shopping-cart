import jsonData from "../jsonData.json";
import { INCREASE, DECREASE, TOTAL, INIT } from "../action/constants";
const initial = {
  products: jsonData,
  //count: 80,
  total: 10,
};

const reducer = (state = initial, action) => {
  // state.forEach((item) => {
  //   item["count"] = 0;
  // });
  // return state;
  console.log(action.type);
  if (action.type === INIT) {
    let temCart = state.products.forEach((item) => {
      item["count"] = 0;
      // return temCart;
    });
    return temCart;
    return {
      ...state,
      products: temCart,
    };
  }
  if (action.type === INCREASE) {
    let temCart = state.products.map((item) => {
      if (item.id === action.payload.id) {
        item = { ...item, count: item.count + 1 };
      }
      return item;
    });
    //console.log(temCart);
    return {
      ...state,
      products: temCart,
    };
  }
  if (action.type === DECREASE) {
    let temCart = state.products.map((item) => {
      if (item.id === action.payload.id) {
        item = { ...item, count: item.count - 1 };
      }
      return item;
    });
    //console.log(temCart);
    return {
      ...state,
      products: temCart,
    };
  }
  if (action.type === TOTAL) {
    return {
      ...state,
      state: action.payload,
    };
  }
  return state;
};

export default reducer;
