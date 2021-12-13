export const addToCart = (pool) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      poolId: pool.id,
      poolName: pool.name,
      maxAmount: pool.maxAmount,
      quantity: 1,
    },
  };
};

export const increment = (poolId) => {
  return { type: "INCREMENT_QTY", payload: poolId };
};

export const decrement = (poolId) => {
  return { type: "DECREMENT_QTY", payload: poolId };
};

export const remove = (poolId) => {
  return { type: "REMOVE_FROM_CART", payload: poolId };
};
