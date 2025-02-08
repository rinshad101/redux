import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import "./App.css";
import { changeColor } from "./redux11/buttonSlice";

function App() {
  const {value} = useSelector((state) => state.button);
  const dispatch = useDispatch();
  console.log(value);

  return (
    <>
      <button
        className={`w-[100px] border ${value ? 'bg-white':"bg-black"}`}
        onClick={() => dispatch(changeColor(!value))}
      >
        button
      </button>
    </>
  );
}

export default App;
