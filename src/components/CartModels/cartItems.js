import React from "react";
import "./cartItems.css";
import ReactDOM from "react-dom";
// import ReactDOM from "react-dom";

const cartItem = (props) => {
  const Backdrop = (props) => {
    return <div className="model-wrapper" onClick={props.OnClose}></div>;
  };

  const ModelOverlay = (props) => {
    return <div className="model-container"> {props.children}</div>;
  };

  const portalElemnt = document.getElementById("overlayBackdrop");

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop OnClose={props.onClose} />,
        portalElemnt
      )}

      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalElemnt
      )}
    </>
  );
};

export default cartItem;
