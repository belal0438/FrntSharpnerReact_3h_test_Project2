import React, { useContext } from "react";
import "./cartItems.css";
import CartItem from "./cartItems";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const CartCxt = useContext(CartContext);
  const totalPrice = CartCxt.items.reduce((curEle, Ele) => {
    return curEle + Number(Ele.amount) * Number(Ele.price);
  }, 0);
  // console.log(totalPrice);
  const OnclickHnalderDecresAmount = (eleId) => {
    // console.log("eleId", eleId);
    CartCxt.removeItem(eleId);
  };

  const OnclickHnalderIncreassAmount = (ele) => {
    // console.log("eleId", ele);
    CartCxt.addItem(ele);
  };

  const UlListVlaue = (
    <ul>
      {CartCxt.items.map((ele) => (
        <li key={ele.id}>
          <div className="medicinInfo">
            <span>{ele.name}</span>
            <span>amount:- {ele.amount} </span>
            <span>${ele.price}</span>
          </div>
          <div className="IncDecBtn">
            <button onClick={() => OnclickHnalderDecresAmount(ele.id)}>
              -
            </button>
            <button onClick={() => OnclickHnalderIncreassAmount(ele)}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <CartItem onClose={props.hideCart}>
      <ul>{UlListVlaue}</ul>
      <div>
        <div className="totalAmountPrice">
          <span>Total Price</span>
          <p>${totalPrice}</p>
        </div>
        <div className="CloseOrderBtn">
          <button onClick={props.hideCart}>Close</button>
          <button>Order</button>
        </div>
      </div>
    </CartItem>
  );
};

export default Cart;
