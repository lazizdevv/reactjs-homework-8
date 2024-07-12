import avatar from "../../assets/images/avatar.jpg"

export const ChangeAccount = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col mt-4 md:mt-20  bg-white w-[60vw] h-[50vh] rounded-xl overflow-hidden shadow border">
          <img className="border-4 m-auto w-40 h-40 rounded-full" src={avatar} alt="user-avatar" />

          <button className="mt-2 md:mt-5 m-auto w-[70%] md:w-1/4 cursor-pointer transition-all bg-primary text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
            change account
          </button>
        </div>
      </div>
    </>
  );
};
