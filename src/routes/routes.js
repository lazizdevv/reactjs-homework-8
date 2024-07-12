import { nanoid } from "nanoid";
import { ProductDetail } from "../components/productDetail/product-detail";
import { Home } from "../pages/home";

import { Profile } from "../pages/user/profile";
import { ChangeAccount } from "../pages/user/change-account";
import { OrderList } from "../pages/user/order-list";

export const routes = [
    {
        component:Home,
        id:nanoid()
    },
    {
        component:ProductDetail,
        path: "product-detail/:id",
        id: nanoid()
    }
];


export const userRoute = [
    {
      component: Profile,
      id: nanoid(),
    },
    {
      component: OrderList,
      path: "order-list",
      id: nanoid(),
    },
    {
      component: ChangeAccount,
      path: "change-account",
      id: nanoid(),
    },
  ];