import React from "react";
import logo from "../assets/shopee.tw_-_png_0-removebg-preview.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link,NavLink, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
//tailwind classNamees
const styles = {
  nav: "bg-white flex items-center justify-between p-5",
  div_1: `flex items-center`,
  logo: `h-14`,
  div_category: `h-12 flex items-center gap-2 lg:gap-4 bg-blue-700 p-3 text-white rounded-lg`,
  heading_category: `font-semibold hidden md:block`,
  div_search_input: `h-13 relative md:flex items-center text-gray-200 focus-within:text-black space-x-6 hidden ml-3 lg:ml-5`,
  search_input: `pr-3 pl-10 px-3 py-2 font-semibold placeholder-gray-200 text-black  rounded-xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2  w-[250px] lg:w-[400px] bg-[#bbb] h-13`,
  search_icon: `pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-2 lg:right-5`,
  div_2: `flex items-center h-13`,
  div_account_button: `relative flex items-center text-black focus-within:text-black space-x-6 `,
  input_button: `pr-3 pl-2 px-3 py-2 font-semibold placeholder-gray-300 text-black  rounded-sm border-none ring-2 ring-gray-200 focus:ring-black focus:ring-2 hidden lg:block w-[200px] cursor-pointer`,
  account_icon: `pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-2 lg:right-5`,
  separator: `font-bold text-4xl m-2`,
  cart: `text-gray-800`,
};

const Navbar = ({ setOpen,user }) => {
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const navigate = useNavigate()
  const auth = getAuth();
  const handleLogin=()=>{
    if(user){
      signOut(auth).then(() => {
        toast.success("Logout successful");
      }).catch((error) => {
        toast.error(error.message)
      });
    }else{
      navigate("/Login")
    }
  }


  // Rest of your component code goes here

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.div_1}>
          <NavLink to="/"><img src={logo} className={styles.logo} /></NavLink>
          <NavLink to="/Shop" className={styles.div_category}>
            <BiMenuAltRight size={22} />
            <h2 className={styles.heading_category}>SHOP BY CATEGORY</h2>
          </NavLink>

          <div className={styles.div_search_input}>
            <input
              type="text"
              name="search"
              autoComplete="off"
              placeholder="search..."
              className={styles.search_input}
            />
            <AiOutlineSearch className={styles.search_icon} />
          </div>
        </div>

        <div className={styles.div_2}>
          <div className={styles.div_account_button}>
            <button
              type="button"
              name="search"
              autoComplete="off"
              placeholder="Account "
              className={styles.input_button}
              onClick={handleLogin}
            >
              {user?"Logout":"Login"}
            </button>
           <BsPerson className={styles.account_icon} />
          </div>
          <span className={styles.separator}>|</span>

          {/* <BsCart2  size={40} className={styles.cart}/>
          <h3 className="text-xl">{quantity}</h3> */}
          <button
            className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
            aria-label="Cart"
            onClick={() => {
              setOpen(true);
            }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span className="absolute inset-0 object-right-top -mr-6">
              {quantity > 0 && (
                <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                  {quantity}
                </div>
              )}
            </span>
          </button>
        </div>
      </nav>
      <ToastContainer />
    </header>
  );
};

export default Navbar;
