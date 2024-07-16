import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTrip from "./create-trip/index.jsx";
import Header from "./components/custom/Header.jsx";
import Summary from "./create-trip/Summary.jsx";
import { TripProvider } from "./context/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
  },
  {
    path: "/create-trip/summary",
    element: <Summary />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Header />
      <TripProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    </TripProvider>
  </React.StrictMode>
);
