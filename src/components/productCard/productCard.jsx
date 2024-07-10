import { Like } from "../../assets/svg/like";
import { Shopping } from "../../assets/svg/shopping";

export const ProductCard = ({ img, price, name, order, isNew, top, }) => {
  return (
    <>
      <div className="bg-white w-[230px] p-[10px] flex flex-col rounded-[10px] relative hover:scale-105 cursor-pointer">
        <img className="" src={img} alt="product-img" />
        <span className="text-primary font-nuckle text-lg font-[591] leading-[22px] tracking-normal text-left">{price + ` so'm`}</span>
        <p className="w-[197px] h-[51px] text-secondary font-nuckle text-sm font-[539] leading-[17px] tracking-normal text-left">{name}</p>
        <p className="text-accent font-nuckle text-sm font-[539] leading-[17px] tracking-normal text-left">{order + ` ta buyurtma`}</p>
        <div className="flex flex-row p-2 justify-between mt-[15px]">
          <button className="w-[130px] h-[40px] py-[10px] bg-primary rounded-lg flex justify-center align-middle text-white font-nuckle text-base font-[539] leading-[19px] tracking-[1%] text-left">
            Sotib olish
          </button>
          <Shopping />
        </div>

        {isNew && 
        <div className="bg-[#EB8528] py-[5px] px-[10px] rounded-[4px] w-[81px] absolute left-3">
            <p className="text-white font-roboto text-base font-normal leading-[19px] tracking-normal text-left">Yangilik</p>
        </div>}

        {top && 
        <div className="bg-[#ff0101] py-[5px] px-[10px] rounded-[4px] w-[81px] absolute left-3">
            <p className="text-white font-roboto text-base font-normal leading-[19px] tracking-normal text-left">Top sale</p>
        </div>}
            <span className="w-8 absolute right-3 cursor-pointer"><Like /></span>
      </div>
    </>
  );
};
