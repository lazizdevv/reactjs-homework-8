import homeBanner from "../../assets/images/homeBanner.png";
import { Carousel } from "../carousel";

export const HomeBanner = () => {
    return(
        <>
        <div className="my-[60px]">
          <Carousel>
            <div className="">
              <img src={homeBanner} alt="" />
            </div>
            <div className="">
              <img src={homeBanner} alt="" />
            </div>
            <div className="">
              <img src={homeBanner} alt="" />
            </div>

            <div className="">
              <img src={homeBanner} alt="" />
            </div>
            <div className="">
              <img src={homeBanner} alt="" />
            </div>
          </Carousel>
        </div>
        </>
    )
}