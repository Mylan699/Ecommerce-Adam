import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/rootes"
import "./index.css";
import Collection from "./Views/Collection";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Contact from "./Views/Contact";

//ReactDOM.createRoot(document.getElementById("root")).render(<App />);

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
        path: "Collection",
        element: <Collection/>
    },
    {
        path: "Contact",
        element: <Contact/>
    },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );