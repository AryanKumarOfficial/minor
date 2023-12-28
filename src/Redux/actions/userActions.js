import { INCREMENT, DECREMENT } from "./types";

export const Deposit = (amount) => ({
    type: INCREMENT,
    payload: amount,
});

export const Withdrow = (amount) => ({
    type: DECREMENT,
    payload: amount,
});