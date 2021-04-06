import jsonData from "../jsonData.json";
import { INCREASE, DECREASE, TOTAL } from "../action";
const init = {
  products: jsonData,
  count: 0,
  total: 0,
};

const reducer = (state = init, action) => {
  if (action.type === INCREASE) {
    // let temCart = state.products.map((item) => {
    //   if (item.id === action.payload.id) {
    //     count = count + 1;
    //   }
    //   return item;
    // });
    //console.log(temCart);
    return {
      ...state,
      count: action.payload.count + 1,
    };
  }
  if (action.type === DECREASE) {
    //console.log(action.payload.id);
    return {
      ...state,
      state: action.payload,
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
