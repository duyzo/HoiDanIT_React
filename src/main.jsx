import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersPage from "./pages/users.jsx";
import ProductsPage from "./pages/products.jsx";
import LoginsPage from "./pages/login.jsx";
import RegistersPage from "./pages/register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <UsersPage/>
  },
  {
    path: "/products",
    element: <ProductsPage/>
  },
  {
    path: "/login",
    element: <LoginsPage/>
  },
  {
    path: "/register",
    element: <RegistersPage/>
    },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
