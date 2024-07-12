import { Carousel } from "../carousel";
import headerBanner1 from "../../assets/images/headerBanner1.png";
export const HeaderBanner = () => {
    return(
        <>
        <div className="container my-10">
        <Carousel>
          <div className="">
            <img src={headerBanner1} alt="" />
          </div>
          <div className="">
            <img src={headerBanner1} alt="" />
          </div>
          <div className="">
            <img src={headerBanner1} alt="" />
          </div>

          <div className="">
            <img src={headerBanner1} alt="" />
          </div>
          <div className="">
            <img src={headerBanner1} alt="" />
          </div>
        </Carousel>
      </div>
        </>
    )
}