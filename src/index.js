import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App';
// import Home from './features/Home';
import Home from './features/Home';
import About from './features/about/About';
import Projects from './features/projects/Projects';
import TechStack from './features/techstacks/TechStack';

import Menu from './features/Menu';
import ErrorPage from './features/card/Language';

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/projects',
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/tech',
    element: <TechStack />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Menu} />
    <TechStack />
  </React.StrictMode>,
  // <div>
  //   <App />
  // </div>,
);
