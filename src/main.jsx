import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AddProduct from './AddProduct.jsx';
import MyCart from './MyCart.jsx';
import Authprovide from './Provider/Authprovide.jsx';
import BrandCarInfo from './Components/brandCarInfo.jsx';
import Cardetails from './Components/Cardetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/brand.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addproduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/cartsection',
        element: <MyCart></MyCart>
      },
      {
        path: '/:name',
        element: <BrandCarInfo></BrandCarInfo>,
        loader: ({ params }) => fetch(`http://localhost:5000/cardetails/${params.name}`)
      },
      {
        path: '/:name/:_id',
        element: <Cardetails></Cardetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/cardetails/${params.name}/${params._id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovide>
      <RouterProvider router={router} />
    </Authprovide>
  </React.StrictMode>,
)
