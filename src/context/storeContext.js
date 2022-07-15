import React from "react";

// context describes the data and functions that will exist in store
// this contains only the definition, NO IMPLEMENTATION here

const StoreContext = React.createContext({
  cart: [],
  user: {},

  addProduct: () => {},
  removeProduct: () => {},
});

export default StoreContext;
