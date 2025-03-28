import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from "axios";
import { Header } from "./Header";
import { ProductsPage } from "./ProductsPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { Footer } from "./Footer";
import { ProductsNew } from "./ProductsNew";
import { OrdersNew } from "./OrdersNew";
import { OrdersIndex } from "./OrdersIndex";
// import { CartedProductsIndex } from "./CartedProductsIndex";
import { CategoriesShowPage } from "./CategoriesShowPage";
import { CategoriesIndex } from "./CategoriesIndex";

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
      },
      {
        path: "/orders",
        element: <OrdersIndex />,
        loader: () => axios.get("http://localhost:3000/orders.json").then(response => response.data)
      },
      {
        path: "/categories",
        element: <CategoriesIndex />,
        loader: () => axios.get("http://localhost:3000/categories.json").then(response => response.data)
      },
      {
        path: "/categories/:id",
        element: <CategoriesShowPage />,
        loader: ({ params }) => axios.get(`http://localhost:3000/categories/${params.id}.json`).then((response) => response.data)
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;