import React, { useContext } from "react";
import InputAmountForm from "./inputAmountForm";
import CartContext from "../store/cart-context";

const ListValues = (props) => {
  const Cxt = useContext(CartContext);

  const OnAddtoCardHadler = (amount) => {
    const obj = {
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      amount: Number(amount),
    };
    // console.log("obj", obj);
    Cxt.addItem(obj);
  };

  return (
    <li key={props.id}>
      <div className="about-madicine">
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <p>${props.price}</p>
      </div>
      <div>
        <InputAmountForm OnAddToHeader={OnAddtoCardHadler} />
      </div>
    </li>
  );
};

export default ListValues;
