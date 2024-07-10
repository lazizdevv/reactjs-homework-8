export const Footer = () => {
  return (
    <>
      <div className="container pt-16 pb-10">
        <div className="flex justify-between flex-wrap text-gray-800 font-nuckle text-base font-[539] cursor-pointer leading-[19px] tracking-[1%] text-left">
          <div className="grid grid-cols-2 justify-items-center gap-2 lg:gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

            <div className="w-[188px] ">
              <ul className="flex flex-col gap-5 justify-between">
                <li className="">Umumiy shartlar</li>
                <li className="">Ofertalar arxivi</li>
                <li className="">Nizom</li>
                <li className="">Guvohnoma</li>
              </ul>
            </div>

            <div className="w-[188px] ">
              <ul className="flex flex-col gap-5 justify-between">
                <li className="">Do’konlar</li>
                <li className="">Biz haqimizda</li>
                <li className="">Hamkorlik uchun</li>
                <li className="">Qaytarish</li>
                <li className="">Promokodlar</li>
              </ul>
            </div>

            <div className="w-[188px] ">
              <ul className="flex flex-col gap-5 justify-between">
                <li className="">Katalog 1</li>
                <li className="">Katalog 2</li>
                <li className="">Katalog 3</li>
                <li className="">Katalog 4</li>
                <li className="">Katalog 5</li>
                <li className="">Katalog 6</li>
              </ul>
            </div>
          </div>

          <div className="flex w-[396px] ">
            <ul className="flex flex-col justify-start gap-5">
              <li className="">
                <a href="#" className="">contact.@nextstore.uz</a>
                </li>
              <li className="">
                <a href="#" className="">+998 97 712 96 96</a>
                <br />
                <a href="#" className="">+998 97 712 96 96</a>

                </li>
              <li className="">
                <a href="#" className="">Sag’bon 186, Olmazor tumani, Toshkent, O'zbekiston</a>
                </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hr w-full h-[2px] container"></div>

      <div className="container py-10">
        <div className="flex justify-between text-gray-800 font-nuckle text-base font-[539] cursor-pointer leading-[19px] tracking-[1%] text-left">
        <div className="">
            <h1>2022  Nextstore.com</h1>
        </div>
        <div className="">
            <h1>Powered by </h1>
        </div>
        </div>
      </div>
    </>
  );
};
