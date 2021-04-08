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
  //console.log("first", action.type);
  if (action.type === INIT) {
    console.log(state);
    // let temCart = state.products.forEach((item) => {
    //   item["count"] = 0;
    // });
    const qtyr = { count: 0 };
    let temCart = state.products.flat().map((p) => Object.assign(p, qtyr));
    console.log("temp", temCart);
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
