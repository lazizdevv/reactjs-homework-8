export const BrandsCard = ({img}) => {
    return(
        <>
        <div className="">
            <div className="bg-white rounded-lg w-[50px] h-[50px] md:w-[188px] md:h-[100px] flex justify-center align-middle cursor-pointer hover:scale-110">
                <img src={img} alt="" />
            </div>
        </div>
        </>
    )
}