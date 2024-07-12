import { CategoryCard } from "../../components/categoryCard";
import { categoryData } from "../../data/categoryData";
import { productData } from "../../data/productData";
import { ProductCard } from "../../components/productCard";
import { nanoid } from "nanoid";
import { brandData } from "../../data/brandData";
import { shopData } from "../../data/shopData";
import { BrandsCard } from "../../components/brandsCard";
import { Link } from "react-router-dom";
import { HeaderBanner } from "../../components/header-banner";
import { HomeBanner } from "../../components/home-banner";

export const Home = () => {
  return (
    <>
    <HeaderBanner/>
      <div className="container">
        <div className="mb-10 mt-24">
          <h1 className="text-secondary font-nuckle text-[28px] font-[539] leading-[36px] tracking-[0%] text-left mb-5">
            Kategoriyalar
          </h1>
          <div className="grid grid-cols-2 justify-items-center gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
            {categoryData.map((category) => (
              <CategoryCard key={nanoid()} {...category} />
            ))}
          </div>

          <button className="w-full h-[50px] bg-white rounded-[10px] mt-5 hover:bg-slate-200">
            <a
              href="#"
              className="text-secondary font-nuckle text-[18px] font-[591] leading-[22px] tracking-[0%] text-center"
            >
              Batafsil
            </a>
          </button>
        </div>

        <div className="">
          <h1 className="text-secondary font-nuckle text-[28px] font-[539] leading-[36px] tracking-[0%] text-left mb-5">
            Eng ko’p sotilgan
          </h1>

          <div className="grid grid-cols-1 justify-items-center gap-2 lg:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {productData.map((product) => (
              <Link to={`/product-detail/${product.id}`} key={product.id}>
              
              <ProductCard key={nanoid()} {...product} />
              </Link>
            ))}
          </div>

          <button className="w-full h-[50px] bg-white rounded-[10px] mt-5 hover:bg-slate-200">
            <a
              href="#"
              className="text-secondary font-nuckle text-[18px] font-[591] leading-[22px] tracking-[0%] text-center"
            >
              Ko’proq ko’rish
            </a>
          </button>
        </div>

        <HomeBanner/>

        <div className="mb-16">
          <h1 className="text-secondary font-nuckle text-[28px] font-[539] leading-[36px] tracking-[0%] text-left mb-5">
            Eng ommabop
          </h1>

          <div className="grid grid-cols-1 justify-items-center gap-2 lg:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {productData.map((product) => (
              <Link to={`/product-detail/${product.id}`} key={product.id}>
              
              <ProductCard key={nanoid()} {...product} />
              </Link>
            ))}
          </div>

          <button className="w-full h-[50px] bg-white rounded-[10px] mt-5 hover:bg-slate-200">
            <a
              href="#"
              className="text-secondary font-nuckle text-[18px] font-[591] leading-[22px] tracking-[0%] text-center"
            >
              Ko’proq ko’rish
            </a>
          </button>
        </div>

        <div className="">
          <h1 className="text-secondary font-nuckle text-[28px] font-[539] leading-[36px] tracking-[0%] text-left mb-5">
            Brendlar bo’yicha
          </h1>

          <div className="grid grid-cols-5 justify-items-center gap-2 lg:gap-5 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-6">
            {brandData.map((brand) => (
              <BrandsCard key={nanoid()} {...brand} />
            ))}
          </div>
        </div>

        <HomeBanner/>

        <div className="mb-[80px]">
          <h1 className="text-secondary font-nuckle text-[28px] font-[539] leading-[36px] tracking-[0%] text-left mb-5">
            Do'konlarimiz
          </h1>

          <div className="grid grid-cols-5 justify-items-center gap-2 lg:gap-5 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-6">
            {shopData.map((shop) => (
              <BrandsCard key={nanoid()} {...shop} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
