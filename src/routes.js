import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Tables2 from "views/Dashboard/Tables2.js";
import Billing from "views/Dashboard/Billing.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import ShoppingCart from "views/Dashboard/ShoppingCart.js"
import Chat from "views/Dashboard/Chat.js";
import Perfil from "views/Dashboard/Perfil.js"

import Wizard from "views/Dashboard/Wizard.js";


import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
import Error404 from "views/Dashboard/Error404";
import Error500 from "views/Dashboard/Error500";
import Error502 from "views/Dashboard/Error502";
import Dashboard2 from "views/Dashboard/Dashboard2";



var dashRoutes = [
  {
    path: "/landing",
    name: "Landing",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "Dashboard",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard2,
    layout: "/admin",
  },
  {
    path: "/registeradmin",
    name: "Register Admin",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Tables2,
    layout: "/admin",
  },
  {
    path: "/shoppingcart",
    name: "ShoppingCart",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color='inherit' />,
    component: ShoppingCart,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Data Tables",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/vistapago",
    name: "Vista de Pago",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/chat",
    name: "Chat",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Chat,
    layout: "/admin",
  },
  {
    path: "/wizard",
    name: "Wizard",
    rtlName: "لوحة القيادة",
    icon: <SupportIcon color='inherit' />,
    component: Wizard,
    layout: "/admin",
  },
  {
    path: "/error404",
    name: "Error404",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: Error404,
    layout: "/admin",
  },
  {
    path: "/error500",
    name: "Error 500",
    rtlName: "لوحة القيادة",
    icon: <DocumentIcon color='inherit' />,
    component: Error500,
    layout: "/admin",
  },
  {
    path: "/error502",
    name: "Error 502",
    rtlName: "لوحة القيادة",
    icon: <DocumentIcon color='inherit' />,
    component: Error502,
    layout: "/admin",
  },
  {
    name: "Cuenta",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/perfil",
        name: "Perfil",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Perfil,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Iniciar Sesión",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Registrarse",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
  
];
export default dashRoutes;
