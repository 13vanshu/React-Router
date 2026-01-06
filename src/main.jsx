import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Errorpage from './Pages/Errorpage.jsx';
import ContactEmail from './Pages/Contact/ContactEmail.jsx';
import ContactPhone from './Pages/Contact/ContactPhone.jsx';
import ContactAddress from './Pages/Contact/ContactAddress.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
        children: [
          {
            path: "email",
            element: <ContactEmail />,
          },
          {
            path: "phone",
            element: <ContactPhone />,
          },
          {
            path: "address",
            element: <ContactAddress />,
          },
        ],
      },
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
)
