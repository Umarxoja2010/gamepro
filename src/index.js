import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import News from './pages/News';
import Contactus from './pages/Contactus';
const myRouter =createBrowserRouter([{
  errorElement:<Error/>,
  element:<App/>,
  path:"/",
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/portfolio",
      element:<Portfolio/>
    },
    {
      path:"/news",
      element:<News/>
    },
    {
      path:"/contact",
      element:<Contactus/>
    }
  ]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={myRouter} />
  </React.StrictMode>
);


