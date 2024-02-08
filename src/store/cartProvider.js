import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  let [items, setItems] = useState([]);

  const AddItemsTocartHadler = (item) => {
    // Check if the item with the same id already exists in the array
    const existingItem = items.find(
      (existingItem) => existingItem.id === item.id
    );
    if (existingItem) {
      // If the item exists, update the amount
      setItems((prevItems) => {
        return prevItems.map((prevItem) =>
          prevItem.id === item.id
            ? { ...prevItem, amount: prevItem.amount + item.amount }
            : // { ...prevItem, amount: prevItem.amount + 1 }
              prevItem
        );
      });
    } else {
      setItems((prevItem) => {
        return [...prevItem, item];
      });
    }
  };

  const RemoveItemsFromcartHadler = (id) => {
    const existingItem = items.find((existingItem) => existingItem.id === id);
    // console.log("existingItem", existingItem);
    if (existingItem) {
      if (existingItem.amount === 1) {
        setItems((prevItems) => {
          return prevItems.filter((prevItem) => prevItem.id !== id);
        });
      } else if (existingItem.amount > 1) {
        setItems((prevItems) => {
          return prevItems.map((prevItem) =>
            prevItem.id === id
              ? { ...prevItem, amount: prevItem.amount - 1 }
              : prevItem
          );
        });
      }
    }
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: AddItemsTocartHadler,
    removeItem: RemoveItemsFromcartHadler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
