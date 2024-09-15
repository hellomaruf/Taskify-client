import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import SignIn from "../../Pages/SignIn";
import SignUp from "../../Pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: '/signup',
    element:<SignUp/>
  }
]);
