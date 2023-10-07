import { createBrowserRouter } from "react-router-dom";


     
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MoreDetails from "../Pages/MoreDetails";
import PrivateRoute from "./PrivateRoute";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
               loader: () => fetch('/news.json')
                
            },
            {
                path:'/news/:id',
                element:<PrivateRoute><MoreDetails></MoreDetails></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },{
                path:'/register',
                element:<Register></Register>
            }
            
        ]
    }
])
export default router