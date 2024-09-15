import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import CreateTask from "../Pages/CreateTask";
import TaskHome from "../Pages/TaskHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <TaskHome />,
      },
      {
        path: "/create-task",
        element: <CreateTask />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
