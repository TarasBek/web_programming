import { combineReducers } from "redux";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.find((pool) => pool.poolId === action.payload.poolId)) {
        return state.map((pool) => {
          if (pool.poolId === action.payload.poolId) {
            let priceForOne = pool.price / pool.quantity;
            pool.quantity++;
            pool.price += priceForOne;
            return pool;
          }
          return pool;
        });
      }
      return [...state, action.payload];
    case "INCREMENT_QTY":
      return state.map((pool) => {
        if (pool.poolId === action.payload) {
          let priceForOne = pool.price / pool.quantity;
          pool.quantity++;
          pool.price += priceForOne;
          return pool;
        }
        return pool;
      });
    case "DECREMENT_QTY":
      return state.map((pool) => {
        if (pool.poolId === action.payload && pool.quantity >= 2) {
          let priceForOne = pool.price / pool.quantity;
          pool.quantity--;
          pool.price -= priceForOne;
          return pool;
        }
        return pool;
      });
    case "REMOVE_FROM_CART":
      return state.filter(pool => pool.poolId !== action.payload);
    default:
      return state;
  }
};

const allReducers = combineReducers({
  cart: cartReducer,
});

export default allReducers;
