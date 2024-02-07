import React, { useState } from "react";

const InputForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const SubmitFormHandler = (e) => {
    e.preventDefault();
    setName(name);
    setDescription(description);
    setPrice(price);
    const objectData = { id: new Date().getTime(), name, description, price };
    // send Data to parent
    props.DataForList(objectData);
    setName("");
    setDescription("");
    setPrice("");
  };

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  };
  const onChangeDescriptHandler = (e) => {
    setDescription(e.target.value);
  };

  const onChangePriceHandler = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={SubmitFormHandler}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Product Name"
            value={name}
            onChange={onChangeNameHandler}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Product Description"
            value={description}
            onChange={onChangeDescriptHandler}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Product Price"
            value={price}
            onChange={onChangePriceHandler}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
