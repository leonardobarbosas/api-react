import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import Home from './routes/Home/index.tsx';
import NotFound from './routes/NotFound/index.tsx';
import Usuarios from './routes/Usuarios/index.tsx';

const routes = createBrowserRouter([
  {path:"/",element:<App/>,errorElement:<NotFound/>,children:[
    {path:"/",element:<Home/>},
    {path:"/usuarios",element:<Usuarios/>},
  ]} 
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)     