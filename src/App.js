import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import InputForm from "./components/inputForm";
import InputValueList from "./components/inputValueUlList";
import Cart from "./components/CartModels/Cart";
import CartProvider from "./store/cartProvider";

function App() {
  const [dataList, setDataList] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const GetData = (dataList) => {
    setDataList((pevData) => {
      return [...pevData, dataList];
    });
  };

  const OnclickHeaderBtn = () => {
    setShowCart(true);
  };

  const hideCartItem = () => {
    setShowCart(false);
  };

  return (
    <CartProvider className="App">
      {showCart && <Cart hideCart={hideCartItem} />}
      <Header showCart={OnclickHeaderBtn} />
      <InputForm DataForList={GetData} />
      <InputValueList InputDataList={dataList} />
    </CartProvider>
  );
}

export default App;
