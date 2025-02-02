import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from 'react';
import App from './App.jsx';
import Projects from './Projects.jsx';
import AboutMe from './AboutMe.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/portfolio-website",
    element: <App />,
  },
  {
    path: "/portfolio-website/about-me",
    element: <AboutMe />
  },
  {
    path: "/portfolio-website/projects",
    element: <Projects />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
