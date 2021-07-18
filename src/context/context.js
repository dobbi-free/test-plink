import React, { useReducer } from "react";

const SET_PRODUCTS = "SET_PRODUCTS";
const SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT";
const SET_ORDERS = "SET_ORDERS";
const SET_CURRENT_ORDER = "SET_CURRENT_ORDER";
const UPDATE_LOCALSTORAGE = "UPDATE_LOCALSTORAGE";

const GlobalContext = React.createContext([{}, () => {}]);

const GlobalProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case SET_PRODUCTS:
        return {
          ...state,
          products: action.products,
        };
      case SET_CURRENT_PRODUCT:
        return {
          ...state,
          currentProduct: action.currentProduct,
        };
      case SET_ORDERS:
        return {
          ...state,
          orders: action.orders,
        };
      case SET_CURRENT_ORDER:
        return {
          ...state,
          currentOrder: action.currentOrder,
        };
      case UPDATE_LOCALSTORAGE:
        return {
          ...state,
          updateLocalstorage: !state.updateLocalstorage,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    products: [],
    orders: [],
    currentProduct: {},
    currentOrder: {},
    updateLocalstorage: false,
  });

  return (
    <GlobalContext.Provider
      value={{
        store: {
          state,
          dispatch,
        },
        constants: {
          SET_PRODUCTS,
          SET_CURRENT_PRODUCT,
          SET_ORDERS,
          SET_CURRENT_ORDER,
          UPDATE_LOCALSTORAGE,
        },
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export {GlobalContext, GlobalProvider};