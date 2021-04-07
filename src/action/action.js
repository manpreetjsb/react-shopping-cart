import { DECREASE, INCREASE, TOTAL, INIT } from "./constants";

export const Decrease = (id) => {
  return { type: DECREASE, payload: { id: id } };
};

export const Increase = (id) => {
  return { type: INCREASE, payload: { id: id } };
};

export const Init = () => {
  return { type: INIT };
};
