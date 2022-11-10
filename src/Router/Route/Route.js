import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import NotFound from "../../Pages/404Route/NotFound";
import AddService from "../../Pages/AddServices/AddServices/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import MyReviews from "../../Pages/MyReviews/MyReviews/MyReviews";
import UpdateMyReview from "../../Pages/MyReviews/UpdateMyReview/UpdateMyReview";
import Service from "../../Pages/ServicesPage/ServiceRoute/Service/Service";
import ServicesPage from "../../Pages/ServicesPage/ServicesPage/ServicesPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <ServicesPage></ServicesPage>,
        loader: () =>
          fetch("https://assignment-11-server-lime.vercel.app/services"),
      },
      {
        path: "/service/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-lime.vercel.app/services/${params.id}`
          ),
        element: <Service></Service>,
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-my-review/:id",
        element: <UpdateMyReview></UpdateMyReview>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-lime.vercel.app/my-review/${params.id}`
          ),
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
export default router;
