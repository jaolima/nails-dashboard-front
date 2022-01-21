import { Home, Box, LogIn } from "react-feather";

export const MENUITEMS = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: Home,
    type: "link",
    badgeType: "primary",
    active: false,
  },
  {
    title: "Products",
    icon: Box,
    type: "sub",
    active: false,
    children: [
      { path: "/products/physical/category", title: "Category", type: "link" },
      // {
      //   path: "/products/physical/sub-category",
      //   title: "Sub Category",
      //   type: "link",
      // },
      {
        path: "/products/physical/product-list",
        title: "Product List",
        type: "link",
      },
      {
        path: "/products/physical/add-product",
        title: "Add Product",
        type: "link",
      },
    ],
  },
  {
    title: "Login",
    path: "/auth/login",
    icon: LogIn,
    type: "link",
    active: false,
  },
];
