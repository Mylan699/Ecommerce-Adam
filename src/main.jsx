import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

const router = createBrowserRouter([
    {
        path: "/",
        element: <div></div>,
    },
]);
