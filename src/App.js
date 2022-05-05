import "./App.css";
import { Route, Routes } from "react-router-dom";
import { CheckoutComponent } from "./components/CheckoutComponent";
import { ProductComponent } from "./components/ProductComponent";
import { ErrorComponent } from "./components/ErrorComponent";
import { ItemContext } from "./components/ItemContext";
import { useState } from "react";
function App() {
  const [selectedItems, setSelectedItems] = useState([]);


  return (
    <>
      <ItemContext.Provider value={{ selectedItems, setSelectedItems }}>
        <Routes>
          <Route path="/" element={<ProductComponent />} />
          <Route path="checkout" element={<CheckoutComponent />} />
           <Route path="*" element={<ErrorComponent />} /> 
        </Routes>
      </ItemContext.Provider>
    </>
  );
}

export default App;
