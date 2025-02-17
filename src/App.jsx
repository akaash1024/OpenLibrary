import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./component/AppLayout/AppLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/User-Auth/Login";
import { Register } from "./pages/User-Auth/Register";
import { Book } from "./pages/Book";
import { ErrorPage } from "./pages/ErrorPage";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../AuthContextStore";
import { Logout } from "./pages/User-Auth/Logout";
import { AdminLayout } from "./pages/Admin/AdminLayout";
import { AdminUser } from "./pages/Admin/AdminUser";
import { AdminAuthor } from "./pages/Admin/AdminAuthor";
import { AdminContact } from "./pages/Admin/AdminContact";

const route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/book", element: <Book /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/logout", element: <Logout /> },
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          { path: "users", element: <AdminUser /> },
          { path: "authors", element: <AdminAuthor /> },
          { path: "books", element: <Book /> },
          { path: "contacts", element: <AdminContact /> },
          
          // { path: "contact", element: <AdminContact /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={route} />;
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          bodyClassName="toastBody"
        />
      </AuthProvider>
    </>
  );
};

export default App;
