import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, createHashRouter, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from 'react';
import App from './App.jsx';
import Projects from './Projects.jsx';
import AboutMe from './AboutMe.jsx';
import './index.css';

const isDev = import.meta.env.MODE === "development";

const router = (isDev ? createBrowserRouter : createHashRouter)([
  { path: "/", element: <App /> },
  { path: "/about-me", element: <AboutMe /> },
  { path: "/projects", element: <Projects /> },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
