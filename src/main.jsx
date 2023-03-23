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
      element: <Root />,
      loader: rootLoader,
      children: [
        {
          path: "team",
          element: <Team />,
          loader: teamLoader,
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );