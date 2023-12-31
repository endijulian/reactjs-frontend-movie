import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages component
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Genres from "./components/Genres";
import EditMovie from "./components/EditMovie";
import ManageCatalog from "./components/ManageCatalog";
import GraphQL from "./components/GraphQL";
import Login from "./components/Login";
import Movie from "./components/Movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <Movie />,
      },
      {
        path: "/genres",
        element: <Genres />,
      },
      {
        path: "/admin/movie/0",
        element: <EditMovie></EditMovie>,
      },
      {
        path: "/manage-catalog",
        element: <ManageCatalog></ManageCatalog>,
      },
      {
        path: "/graphql",
        element: <GraphQL />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
