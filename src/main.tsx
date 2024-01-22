import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
        errorElement: <div>Not Found</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
        errorElement: <div>Not Found</div>,
      },
      {
        path: "/cart",
        element: <div>Cart</div>,
        errorElement: <div>Not Found</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
