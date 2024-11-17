import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AllTreatments from "../Pages/AllTreatments";
import Appointments from "../Pages/Appointments";
import Profile from "../Pages/Profile";
import Details from "../Pages/Details";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/alltreatments",
        element: <AllTreatments></AllTreatments>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/appointments",
        element: <Appointments></Appointments>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();
          const singelData = data.find((d) => d.id === parseInt(params.id));
          return singelData;
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default routes;
