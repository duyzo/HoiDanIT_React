import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersPage from "./pages/users.jsx";
import BookPage from "./pages/books.jsx";
import LoginsPage from "./pages/login.jsx";
import RegistersPage from "./pages/register.jsx";
import TodoApp from "./Compoment/Todolist/TodoApp.jsx";
import ErrorPage from "./pages/error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/products",
        element: <BookPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginsPage />,
  },
  {
    path: "/register",
    element: <RegistersPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
