import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Home from "./routes/Home/index.tsx";
import NotFound from "./routes/NotFound/index.tsx";
import Usuarios from "./routes/Usuarios/index.tsx";
import Produtos from "./routes/Produtos/index.tsx";
import EditarProdutos from "./routes/EditarProdutos/index.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/usuarios", element: <Usuarios /> },
      { path: "/produtos", element: <Produtos /> },
      { path: "/editar/produtos/:id", element: <EditarProdutos /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
