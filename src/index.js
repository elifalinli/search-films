import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SearchPage from './components/pages/SearchPage';
import NotFound from './components/pages/NotFound'
import { AuthProvider } from './hooks/AuthContext';
import ShowDetailsPage from './components/pages/ShowDetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <NotFound/>,
  
  },
  {
    path: "/search",
    element: <SearchPage/>,
    errorElement: <NotFound/>,
  },
  {
    path: "search/:type/:id/details",
    element:<ShowDetailsPage/>,
    errorElement: <NotFound/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
   <RouterProvider router={router}/>
  </AuthProvider>
);
