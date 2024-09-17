import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Home from "./routes/Home/Home.jsx";
import Polaroids from "./routes/Polaroids/Polaroids.jsx";
import Projects from "./routes/Projects/Projects.jsx";
import Archive from "./routes/Archive/Archive.jsx";

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
        path: "/polaroids",
        element: <Polaroids />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/archive",
        element: <Archive />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
