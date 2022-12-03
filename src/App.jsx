import Home from "./Pages/Homepage/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trial from "./Pages/Shop/Trial";
import Shop from "./Pages/Shop/Shop";
import { useSelector } from "react-redux";
function App() {
  const cartItems = useSelector(state=>state.cart.itemsList)
  console.log(cartItems)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="Shop" element={<Shop/>}/>
          <Route path="Trial" element={<Trial/>}/>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
