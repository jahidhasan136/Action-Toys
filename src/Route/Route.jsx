import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ToysDetails from "../Pages/ToysDetails/ToysDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/AllToys/AllToys";
import AddToys from "../Pages/AddToys/AddToys";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/toys/:id',
        element: <PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/all-toys',
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/toys')
      },
      {
        path: '/add-toys',
        element: <AddToys></AddToys>
      }
    ]
  },
]);

export default router