import { Link } from "react-router-dom";
import { Likes } from "../../assets/svg/likes";
import { Logo } from "../../assets/svg/logo";
import { Mail } from "../../assets/svg/mail";
import { Menu } from "../../assets/svg/menu";
import { Search } from "../../assets/svg/search";
import { Shop } from "../../assets/svg/shopnav";

export const Header = () => {
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container">
          <div className="flex justify-end">
            <div className="gap-64 flex justify-between p-1">
              <a
                className="flex align-middle gap-1 text-gray-800 font-nuckle text-base font-[539] leading-5 tracking-wide text-left"
                href="#"
              >
                <Mail />
                Aloqa uchun
              </a>
              <a
                className="text-gray-800 font-nuckle text-base font-[539] leading-5 tracking-wide text-left"
                href="#"
              >
                Uz
              </a>
            </div>
          </div>
          <div className="flex justify-between py-[13px] flex-wrap gap-5 lg:gap-0">
            <div className="cursor-pointer">
              <Link to={"/"}>
              <Logo/>

              </Link>
            </div>
            <button className="flex justify-between align-middle py-[11px] px-[18px] rounded-lg bg-gradient-to-l from-blue-500 to-red-500 w-[149px] cursor-pointer">
              <Menu />
              <p className="text-white font-nuckle text-base font-[591] leading-[24px] tracking-[1%] uppercase">
                katalog
              </p>
            </button>

            <div className="flex w-[396px] h-[46px] outline-none ">
              <input
                className="w-full text-gray-700 pl-[18px] font-nuckle text-base font-[539] leading-[19px] tracking-[0.6px] text-left border outline-primary rounded-l-lg"
                type="text"
                placeholder="Maxsulotlarni izlash"
              />
              <button className="px-[18px] py-[11px] bg-primary rounded-r-lg">
                <Search />
              </button>
            </div>

            <div className="flex gap-[80px]">
              <button className="bg-[#ECF4FF] p-[11px] w-[46px] h-[46px] rounded-lg hover:bg-primary hover:text-white text-primary">
                <Likes />
              </button>
              <button className="bg-[#ECF4FF] p-[11px] w-[46px] h-[46px] rounded-lg hover:bg-primary hover:text-white text-primary">
                <Shop />
              </button>

              <Link to={"/profile"}>
                <button className="py-[13px] w-[105px] rounded-lg bg-gradient-to-br from-blue-200 to-red-200 p-4 text-black font-[539] font-nuckle text-base  leading-[19px]  text-center">
                  Kirish
                </button>
              </Link>

              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
