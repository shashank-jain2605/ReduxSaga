import "./App.css";
import { addToCart } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart());
  };

  return (
    <div className="App">
      redux
      <button onClick={handleClick}>add to cart</button>
    </div>
  );
}

export default App;
