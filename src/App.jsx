import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { ProductsPage } from "./ProductsPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
// import { LogoutLink } from "./LogoutLink";
import { Footer } from "./Footer";
import { ProductsNew } from "./ProductsNew";
import { OrdersNew } from "./OrdersNew";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/products/new",
        element: <ProductsNew />,
      },
      {
        path: "/orders/new",
        element: <OrdersNew />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;