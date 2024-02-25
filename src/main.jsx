import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import RecipeDetail from "./components/RecipeDetail.jsx";
import Category from "./pages/Category.jsx";
import AllMeals from "./pages/AllMeals.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allmeals",
        element: <AllMeals />,
      },
      {
        path: "/recipe/:recipeId",
        element: <RecipeDetail />,
      },
      {
        path: "/category",
        element: <Category />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
