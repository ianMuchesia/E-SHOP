import React, { useState, useEffect } from "react";
import Home from "./Pages/Homepage/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trial from "./Pages/Shop/Trial";
import Shop from "./Pages/Shop/Shop";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./store/productSlice";
import Spinner from "./components/Spinner";
import Cart from "./Pages/Cart/Cart";
import Login from "./Login/Login";
import Checkout from "./Checkout/Checkout";
import Registration from "./Login/Registration";
import { getAuth } from "firebase/auth";

function App() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  //user signed in?
  const auth = getAuth();
  const user = auth.currentUser;

  getAuth().onAuthStateChanged((user) => {
    if (user) {
      return true;
    } else {
      return false;
    }
  });

  const product = useSelector((state) => state.product);
  //is user logged in

  //fetch products from firestore
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  

  //loading spinner
  if (product.loading) return <Spinner message="loading..." />;
  //console.log(product.products)
  return (
    <BrowserRouter>
      <Navbar setOpen={setOpen} user={user} />
      <Cart open={open} setOpen={setOpen} user={user} />
      <Routes>
        <Route path="/" element={<Home product={product}/>} />
        <Route path="Shop" element={<Shop product={product} />} />
        <Route path="Trial" element={<Trial />} />
        <Route path="Login" element={<Login />} />
        <Route path="Checkout" element={<Checkout user={user}/>} />
        <Route path="Registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
