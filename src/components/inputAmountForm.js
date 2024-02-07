import React, { useRef } from "react";

const InputAmountForm = (props) => {
  const amounts = useRef();
  const AmountHandler = (eve) => {
    eve.preventDefault();
    const enterAmount = amounts.current.value;
    // console.log(enterAmount);
    const Amount = Number(enterAmount.trim());
    props.OnAddToHeader(Amount);
  };

  return (
    <form onSubmit={AmountHandler} className="amount-form">
      <div>
        <label htmlFor="number">Amount</label>
        <input
          ref={amounts}
          type="number"
          id="number"
          name="number"
          min="1"
          max="5"
          defaultValue="1"
        />
      </div>
      <button>Add</button>
    </form>
  );
};

export default InputAmountForm;
