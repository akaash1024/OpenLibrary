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

      /*
      {
        path: "/admin",
        children: [
          { path: "user", element: <User /> },
          { path: "author", element: <Author /> },
          { path: "Book", element: <Book /> },
          { path: "Book", element: <Book /> },
        ],
      },
    */
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
