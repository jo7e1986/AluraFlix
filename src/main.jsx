import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute.jsx";
import NuevoVideoRoute from "./routes/NuevoVideoRoute.jsx";
import NuevaCategoriaRoute from "./routes/NuevaCategoriaRoute.jsx";
import ErrorRoute from "./routes/ErrorRoute.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
      },
      {
        path: "/nuevo-video",
        element: <NuevoVideoRoute />,
      },
      {
        path: "/nueva-categoria",
        element: <NuevaCategoriaRoute />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
