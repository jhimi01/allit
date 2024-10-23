import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/HomePage/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
    {
        path: '/',
        element: <Home />
    }
      ],
    },
    {
      path: "*",
    //   element: <Erronpage></Erronpage>,
    },
  ]);