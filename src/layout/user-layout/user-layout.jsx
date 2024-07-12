import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

export const UserLayout = () => {
  let user = true;

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex">
      <div className="bg-white flex-col flex gap-4 h-[60vh] md:h-screen p-2 md:p-5 w-1/3 md:w-1/4">
        <Link className="bg-white border-2 border-primary p-2 md:p-2 rounded-lg text-primary text-base hover:bg-primary hover:text-white focus:outline-none  focus:text-white focus:bg-primary" to={"/profile"}>Profile</Link>
        <Link className="bg-white border-2 border-primary p-2 md:p-2 rounded-lg text-primary text-base hover:bg-primary hover:text-white focus:outline-none  focus:text-white focus:bg-primary" to={"/profile/order-list"}>Order List</Link>
        <Link className="bg-white border-2 border-primary p-2 md:p-2 rounded-lg text-primary text-base hover:bg-primary hover:text-white focus:outline-none  focus:text-white focus:bg-primary" to={"/profile/change-account"}>Change Account</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
