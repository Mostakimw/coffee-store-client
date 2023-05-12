import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import Coffee from "./components/Coffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/coffee",
        element: <Coffee></Coffee>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "addcoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "updatecoffee",
        element: <UpdateCoffee></UpdateCoffee>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
