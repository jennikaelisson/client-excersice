import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Favorites } from "./pages/Favorites";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <App />,
        index: true,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    //   {
    //     path: "/portfolio",
    //     element: <Portfolio />,
    //   },
    //   {
    //     path: "/contact",
    //     element: <Contact />,
    //   },
    ],
  },
]);
