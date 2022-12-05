import React, {useState,useEffect} from 'react'
import Home from "./Pages/Homepage/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trial from "./Pages/Shop/Trial";
import Shop from "./Pages/Shop/Shop";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./store/productSlice";
import Spinner from "./components/Spinner";
import Cart from "./Pages/Cart/Cart"
import Login from './Login/Login';
import Checkout from './Checkout/Checkout';
import Registration from './Login/Registration';
function App() {
   const cartItems = useSelector((state) =>  state.cart.itemsList);

   const [open, setOpen] = useState(false)
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);
  //is user logged in
  const user = useSelector(state=>state.auth.userID)
  console.log(user)
  //fetch products from firestore
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  //loading spinner
  if (product.loading) return <Spinner message="loading..." />;
  //console.log(product.products)
  return (
    <BrowserRouter>
      <Navbar setOpen={setOpen}/>
      <Cart  cartItems={cartItems} open={open} setOpen={setOpen}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Shop" element={<Shop product={product} user={user} />} />
        <Route path="Trial" element={<Trial />} />
        <Route path="Login" element={<Login />} user={user} />
        <Route path="Checkout" element={<Checkout />} />
        <Route path="Registration" element={<Registration user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
