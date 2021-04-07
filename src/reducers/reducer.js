import jsonData from "../jsonData.json";
import { INCREASE, DECREASE, TOTAL } from "../action/constants";
const init = {
  products: jsonData,
  //count: 80,
  total: 10,
};

const reducer = (state = init, action) => {
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
