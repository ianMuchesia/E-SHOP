import React from "react";
import logo from "../../../assets/shopee.tw_-_png_0-removebg-preview.png";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";

//tailwind classes
const styles = {
    nav:'bg-white flex items-center justify-between p-5',
    div_1:`flex items-center`,
    logo:`h-14`,
    div_category:`h-12 flex items-center gap-2 lg:gap-4 bg-blue-700 p-3 text-white rounded-lg`,
    heading_category:`font-semibold hidden md:block`,
    div_search_input:`h-13 relative md:flex items-center text-gray-200 focus-within:text-black space-x-6 hidden ml-3 lg:ml-5`,
    search_input:`pr-3 pl-10 px-3 py-2 font-semibold placeholder-gray-200 text-black  rounded-xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 lg:w-[400px] bg-[#bbb] h-13`,
    search_icon:`pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-2 lg:right-5`,
    div_2:`flex items-center h-13`,
    div_account_button:`relative flex items-center text-black focus-within:text-black space-x-6 `,
    input_button:`pr-3 pl-2 px-3 py-2 font-semibold placeholder-gray-300 text-black  rounded-sm border-none ring-2 ring-gray-200 focus:ring-black focus:ring-2 hidden lg:block w-[200px] cursor-pointer`,
    account_icon:`pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-2 lg:right-5`,
    separator:`font-bold text-4xl m-2`,
    cart:`text-gray-800`,
}

const Navbar = () => {
  return (
    <header >
      <nav className={styles.nav}>
        <div className={styles.div_1}>
          <img src={logo} className={styles.logo}/>
          <div className={styles.div_category}>
            <BiMenuAltRight size={22}/>
            <h2 className={styles.heading_category}>SHOP BY CATEGORY</h2>
          </div>

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
            >Account</button>
            <BsPerson className={styles.account_icon}/>
            </div>
            <span className={styles.separator}>|</span>
          
          
          <BsCart2  size={40} className={styles.cart}/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
