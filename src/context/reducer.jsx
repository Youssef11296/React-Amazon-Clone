export const initialState = {
  basket: [],
};

export const getTotalBasket = (basket) =>
  basket?.reduce((item, amount) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
