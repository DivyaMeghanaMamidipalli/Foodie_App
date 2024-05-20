import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./pages/About";
import Error from "./pages/Error";
import RestaurantMenu from "./pages/RestaurantMenu";

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element: <About />,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />,
            },
        ],
        errorElement:<Error/>,
    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);