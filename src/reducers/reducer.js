import jsonData from "../jsonData.json";
import { INCREASE, DECREASE, INIT } from "../action/constants";
const initial = {
  products: jsonData,
  totalItemInCart: 0,
  total: 0,
};

const reducer = (state = initial, action) => {
  if (action.type === INIT) {
    const qtyr = { count: 0 };
    let temCart = state.products.flat().map((p) => Object.assign(p, qtyr));
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
      // var msgTotal = state.products.reduce(function (prev, cur) {
      //   return prev + cur.Price;
      // }, 0);

      return item;
    });
    const data = temCart;
    const sumTotal = (arr) =>
      arr.reduce((sum, { Price, count }) => sum + Price * count, 0);
    const msgTotal = sumTotal(data);

    var msgCount = data.reduce(function (prev, cur) {
      return prev + cur.count;
    }, 0);

    return {
      ...state,
      products: temCart,
      totalItemInCart: msgCount,
      total: msgTotal,
    };
  }
  if (action.type === DECREASE) {
    let temCart = state.products.map((item) => {
      if (item.id === action.payload.id) {
        item = { ...item, count: item.count - 1 };
      }
      return item;
    });
    const data = temCart;
    const sumTotal = (arr) =>
      arr.reduce((sum, { Price, count }) => sum + Price * count, 0);
    const msgTotal = sumTotal(data);

    var msgCountForDec = data.reduce(function (prev, cur) {
      return prev + cur.count;
    }, 0);
    return {
      ...state,
      products: temCart,
      totalItemInCart: msgCountForDec,
      total: msgTotal,
    };
  }

  return state;
};

export default reducer;
