import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import PrivateRout from "../Pages/PrivateRout/PrivateRout";
import Blog from "../Pages/Blog";
import Team from "../Pages/Team";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('/services.json'),
            },
            {
            path:'/service/:id',
            element:<PrivateRout><ServiceDetails></ServiceDetails></PrivateRout>,
            loader: ()=> fetch('/services.json'),
            },
            {
            path:'/blog',
            element:<PrivateRout><Blog></Blog></PrivateRout>,
            loader: ()=> fetch('/services.json'),
            },
            {
            path:'/team',
            element:<PrivateRout><Team></Team></PrivateRout>,
            loader: ()=> fetch('/services.json'),
            },
            {
            path:'/login',
            element:<Login></Login>,
            },
            {
            path:'/register',
            element:<Register></Register>,
            },
            
    
    ]
    },
])

export default router


