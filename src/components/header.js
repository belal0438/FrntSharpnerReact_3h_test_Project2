import React, { useContext } from "react";
import CartContex from "../store/cart-context";

const Header = (props) => {
  const CartCntxt = useContext(CartContex);
  // console.log(CartCntxt.items);
  const totalAmount = CartCntxt.items.reduce((curEle, Ele) => {
    return curEle + Number(Ele.amount);
  }, 0);

  return (
    <header>
      <h2>Medicine Shope</h2>
      <div className="header-div">
        <button onClick={props.showCart}>
          <h4>TotalAmount:</h4>
          <div>{totalAmount}</div>
        </button>
      </div>
    </header>
  );
};

export default Header;
