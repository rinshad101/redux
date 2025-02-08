import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredData } from "./state/productSlice/productSlice";

function App() {
  const { filtered } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return <div>

    <button onClick={() => dispatch(filteredData("Electronics"))}>Electronics</button>
    <button onClick={() => dispatch(filteredData("Clothing"))}>Clothing</button>
    <button onClick={() => dispatch(filteredData("Home Appliances"))}>Home Appliances</button>
    <button onClick={() => dispatch(filteredData("all"))}>all</button>

    {filtered.map((items) => (
      <div key={items.id}>{items.name} - {items.price}</div>
    ))}
  </div>;
}

export default App;
