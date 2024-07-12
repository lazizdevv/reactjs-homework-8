import React from "react";
import { Link, useParams } from "react-router-dom";
import { productData } from "../../data/productData";
import { Like } from "../../assets/svg/like";

export const ProductDetail = () => {
  const obj = useParams();
  const data = productData.find((item) => item.id == obj.id);
  return (
    <div className="container mt-5 md:mt-24 mb-10">
      <Link to={"/"}>
      <button className="px-8 py-2 rounded-s-3xl bg-primary text-white mb-4">back</button>
      </Link>
      <div className="flex gap-5 md:gap-10 flex-wrap ">
        <div className="bg-white p-10 md:p-20 flex justify-center align-middle relative">
          <img className="w-[387px]" src={data.img} alt="img" />
          <div className="right-5 top-5 cursor-pointer hover:scale-110 absolute">

          <Like/>
          </div>
        </div>
        <div className="flex gap-5 flex-col">
          <h1 className="w-full text-[28px] font-[591] leading-[36px] tracking-normal text-left text-[rgb(30,30,30)] font-nuckle">
            {data?.name}</h1>
          <h1 className="w-full text-3xl md:text-[48px] font-[591] leading-[58px] tracking-normal text-left text-[rgb(30,30,30)] font-nuckle">
            {data?.price + ' '}so'm / dona</h1>
          <div className="mt-0 md:mt-10 flex gap-5 md:gap-10 flex-wrap justify-center">
            <button className="bg-primary text-white rounded-xl w-[230px] h-[50px] hover:scale-105">sotib olish</button>
            <button className="bg-primary text-white rounded-xl w-[230px] h-[50px] hover:scale-105">bo'lib to'lash</button>
          </div>
        </div>
      </div>
    </div>
  );
};
