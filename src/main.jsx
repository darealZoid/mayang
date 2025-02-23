import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import NotFoundPage from "./Routes/NotFoundPage/NotFoundPage.jsx";
import Foods from "./Routes/Foods/Foods.jsx";
import Events from "./Routes/Events/Events.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/foods",
    element: <Foods />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "*",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
