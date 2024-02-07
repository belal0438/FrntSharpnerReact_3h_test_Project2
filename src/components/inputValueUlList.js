import React from "react";
import ListValues from "./listValues";

const InputValueList = (props) => {
  // console.log("inputValueList", props.InputDataList);

  const ListItem = props.InputDataList.map((ele) => (
    <ListValues
      key={ele.id}
      id={ele.id}
      name={ele.name}
      description={ele.description}
      price={ele.price}
    />
  ));

  return (
    <div className="amount-list">
      <ul>{ListItem}</ul>
    </div>
  );
};

export default InputValueList;
