import { createBrowserRouter } from "react-router-dom";

import ForgotPassword from "../../Pages/Auth/ForgotPassword";
import OTPVerify from "../../Pages/Auth/OTPVerify";
import NewPassword from "../../Pages/Auth/NewPassword";
import Login from "../../Pages/Auth/Login";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../UI/ErrorPage";
import { Dashboard } from "../dashboard/Dashboard/Dashboard";

import UserList from "../dashboard/UserList/UserList";
import Categories from "../dashboard/Categories/Categories";
import Transaction from "../dashboard/Transaction/Transaction";

import Setting from "../dashboard/Setting";
import { ChangePassword } from "../dashboard/ChangePassword";
import PrivacyPolicy from "../dashboard/PrivacyPolicy";
import TermsCondition from "../dashboard/TermsCondition";
import Reports from "../dashboard/Reports/Reports";
import PrivateRoute from "./PrivateRoute";
import About from "../dashboard/About";
import FAQ from "../dashboard/FAQ/Faq";
import Notifications from "../dashboard/Notifications";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute> <MainLayout /> </PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users-list",
        element: <UserList />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "transaction",
        element: <Transaction />,
      },
      {
        path: "changePassword",
        element: <ChangePassword />,
      },

      {
        path: "report",
        element: <Reports />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
      // {
      //   path: "all-admin",
      //   element: <AdminList />,
      // },
      {
        path: "terms-condition",
        element: <TermsCondition />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "notification",
        element: <Notifications />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },

      {
        path: "policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/verify-otp", element: <OTPVerify /> },
  { path: "/new-password", element: <NewPassword /> },
]);

export default router;
