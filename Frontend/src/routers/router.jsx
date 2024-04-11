import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Shop from "../Components/Shop";
import Blog from "../Components/Blog";
import About from "../Components/About";
import SingleBook from "../Components/SingleBook"
import DashboardInterface from "../Dashboard/DashboardInterface";
import Dashboard from "../Dashboard/Dashboard";
import UploadBook from "../Dashboard/UploadBook";

import EditBooks from "../Dashboard/EditBooks";
import Manageyourbooks from "../Dashboard/Manageyourbooks";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import Privateroute from "../PrivateRoute/Privateroute";
import Logout from "../Components/Logout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
          path: "/",
          element: <Home/>
        },{
          path:"/shop",
          element:<Shop/>
        },{
          path:"/blog",
          element:<Blog/>
        },
        {
          path:"/about",
          element:<About/>
        },{
          path:"/book/:id",
          element:<SingleBook/>,
          loader: ({params})=> fetch(`import.meta.env.VITE_API_URL/book/${params.id}`).then((res)=>res.json())
        }
      ]
    },
    {
      path: "/admin/dashboard",
      element:<DashboardInterface/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<Privateroute><Dashboard/></Privateroute>
        },
        {
          path:"/admin/dashboard/upload-book",
          element:<UploadBook/>
        },{
          path:"/admin/dashboard/manage-books",
          element:<Manageyourbooks/>
        },{
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks/>,
          loader: ({params})=> fetch(`import.meta.env.VITE_API_URL/book/${params.id}`).then((res)=>res.json())
          
        }
      ]
    },{
      path:"sign-up",
      element:<Signup/>
    },{
      path:"login",
      element:<Login/>
    },{
      path:"logout",
      element:<Logout/>
    }
  ]);

  export default router;