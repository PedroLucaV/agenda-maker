// Dependencies:
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Files & Pages:
import App from "./pages/App/App";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import "./index.css";

// Creating the project router:
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/dashboard",
    element: <App />,
    errorElement: <Error />
  },
]);

// Creating the React DOM:
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);