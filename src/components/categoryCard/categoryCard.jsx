
export const CategoryCard = ({img,name,}) => {
    return(
        <>
        <div className="py-2 bg-white w-[136px] h-[200px] flex flex-col rounded-[10px] cursor-pointer hover:scale-110">
            <img src={img} alt="img" className="w-[136px] h-[136px]" />
            <h1 className="text-secondary font-nuckle text-base font-[539] leading-[19px] tracking-[1%] text-center">{name}</h1>
        </div>
        </>
    )
}