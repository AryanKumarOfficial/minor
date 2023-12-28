import { INCREMENT, DECREMENT } from "../actions/types";
const initialState = {
    balance: 0
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                balance: state.balance + action.payload
            };
        case DECREMENT:
            return { ...state, balance: state.balance - action.payload };
        default:
            return state;
    }
}

export default userReducer;