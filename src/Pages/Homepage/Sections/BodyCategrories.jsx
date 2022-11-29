import React from "react";
import frame_1 from "../../../assets/Untitled design.png";
import sales from "../../../assets/Group_1235.png";
import headphones from "../../../assets/KEF_Headphones-removebg-preview.png";
import mens_collection from "../../../assets/mens_collection.webp";
import womens_collection from "../../../assets/womens collection.webp";
import green_collection from "../../../assets/green-gradient.webp";
import purple_collection from "../../../assets/purple-gradient.webp";
import accessories from "../../../assets/Accessories.webp";
import Cameras from "../../../assets/Cameras.webp";
import Lighting from "../../../assets/Lighting.webp";
import Keyboards from "../../../assets/Keyboards.webp";
import mobile_phone from "../../../assets/mobile_phone.png";
import furniture from "../../../assets/Mid-Century_Modern_Sale_at_the_Foundary-removebg-preview.png";

const styles = {
  section: `grid  gap-4 font-sans sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`,
  //container_1
  firstContainer: `sm:col-span-2 xl:col-span-3 grid sm:grid-cols-2 gap-4 `,
  card_1: `relative  sm:col-span-2`,
  frame_oneImage: `h-[339px] border-lg w-full rounded-2xl`,
  sales_div: `grid place-items-center`,
  sales_img: `absolute top-0 sm:ml-20`,
  headphones_img: `absolute h-[200px] bottom-2 sm:bottom-16 sm:hidden md:block md:left-4 lg:left-12 xl:left-40`,
};
const BodyCategrories = () => {
  return (
    <section className={styles.section}>
      <div className={styles.firstContainer}>
        {/**1st card */}

        <div className={styles.card_1}>
          <img src={frame_1} alt="" className={styles.frame_oneImage} />
          <div className={styles.sales_div}>
            <img src={sales} alt="" className={styles.sales_img} />
            <img src={headphones} alt="" className={styles.headphones_img} />
          </div>
        </div>
        {/**second card */}
        <div className="relative">
          <img src={mens_collection} className="rounded-xl " />
          <div className="absolute bottom-10 left-2 sm:bottom-32 sm:left-4">
            <h3 className="text-2xl">Shop</h3>
            <h2 className="text-sm text-white mt-2 font-bold sm:text-xl">
              Men Collection
            </h2>
            <button className="bg-blue-500 text-white border-none mt-2 p-2 font-semibold rounded-lg cursor-pointer text-sm sm:text-lg">
              Shop Now
            </button>
          </div>
        </div>
        {/**3rd card */}
        <div className="relative">
          <img src={womens_collection} className="rounded-xl" />
          <div className="absolute bottom-10 right-2 top-10 sm:top-32">
            <h3 className="text-2xl text-center">Shop</h3>
            <h2 className="text-sm text-white mt-2 font-bold sm:text-xl">
              Women Collection
            </h2>
            <button className="bg-blue-500 text-white border-none mt-2 p-2 font-semibold rounded-lg cursor-pointer text-sm ml-5 sm:text-xl">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      {/**other categories */}
      <div className="col-span-2 lg:col-span-1 gap-4 grid sm:grid-cols-2 lg:grid-cols-1 ">
        <div className="relative">
          <img src={green_collection} className="rounded-xl xl:h-full" />
          <div className="grid grid-cols-1 place-items-center ">
            <img
              src={mobile_phone}
              className="absolute top-2 h-40 sm:right-2 sm:h-64"
            />
            <div className="absolute bottom-2 flex flex-col justify-center items-center sm:left-2 sm:bottom-8">
              <h3 className="text-xl">Shop</h3>
              <h2 className="text-lg text-white  font-bold">Mobile Phones</h2>
              <button className="bg-blue-500 text-white border-none mt-2 p-2 font-semibold rounded-lg cursor-pointer text-sm ml-5 sm:h-14 sm:w-28 sm:text-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <img src={purple_collection} className="rounded-xl xl:h-full" />
          <div className="grid grid-cols-1 place-items-center ">
            <img
              src={furniture}
              className="absolute top-2 h-40 sm:left-4 sm:h-72"
            />
            <div className="absolute bottom-2 flex flex-col justify-center items-center sm:right-2 sm:bottom-8">
              <h3 className="text-xl">Shop</h3>
              <h2 className="text-lg text-white  font-bold">Furniture</h2>
              <button className="bg-blue-500 text-white border-none mt-2 p-2 font-semibold rounded-lg cursor-pointer text-sm ml-5 sm:h-14 sm:w-28 sm:text-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid sm:col-span-2 lg:col-span-3 gap-2 sm:grid-cols-2 lg:grid-cols-4 xl:gap-4 xl:col-span-4">
        <div className="relative ">
          <img src={accessories} className="rounded-3xl" />
          <div className="absolute bottom-10 left-2">
            <h3 className="text-2xl text-white">Home</h3>
            <h2 className="text-sm text-white mt-2  font-bold sm:text-4xl sm:mt-0">
              Accessories
            </h2>
            <button className="bg-blue-500 text-white border-none mt-2 p-2 font-semibold rounded-lg cursor-pointer text-sm">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative ">
          <img src={Cameras} className="rounded-3xl" />
          <div className="absolute bottom-10 left-2">
            <h3 className="text-2xl">Canon</h3>
            <h2 className="text-sm text-white mt-2 font-bold sm:text-4xl sm:mt-0">
              Camera
            </h2>
            <button className="bg-blue-500 text-white border-none mt-2 p-2 font-semibold rounded-lg cursor-pointer text-sm sm:p-3">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative ">
          <img src={Lighting} className="rounded-3xl" />
          <div className="absolute bottom-10 left-2">
            <h3 className="text-2xl text-white">Home</h3>
            <h2 className="text-sm text-white mt-2 font-bold sm:text-4xl sm:mt-0">
              Lighting
            </h2>
            <button className="bg-blue-500 text-white border-none mt-2 p-2 font-semibold rounded-lg cursor-pointer text-sm sm:p-3">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative ">
          <img src={Keyboards} className="rounded-3xl" />
          <div className="absolute bottom-10 left-2">
            <h3 className="text-2xl text-white">Canon</h3>
            <h2 className="text-sm text-white mt-2 font-bold sm:text-4xl sm:mt-0">
              Keyboards
            </h2>
            <button className="bg-blue-500 text-white border-none mt-2 p-2 font-semibold rounded-lg cursor-pointer text-sm sm:p-3">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyCategrories;
