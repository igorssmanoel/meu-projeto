import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Products from "../Pages/Products";

export default createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
        errorElement: <ErrorPage />
    },
    {
        path: "/products",
        element: <Products />,
        errorElement: <ErrorPage />
    },
    {
        path: "/contact",
        element: <div>Contact</div>,
        errorElement: <ErrorPage />
    },
]);