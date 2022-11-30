import Home from "./Pages/Homepage/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="Shop" element={<Shop/>}/>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
