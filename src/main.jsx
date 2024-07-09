import ReactDOM from 'react-dom/client'; // Import the ReactDOM library
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'; // Import the createBrowserRouter and RouterProvider components from React Router
import App from './App.jsx';  // Import the App component
import Error from './components/errorpage.jsx'; //  Import the Error component
import About from './components/about.jsx'; // Import the About component
import Portfolio from './components/portfolio.jsx'; // Import the Portfolio component 
import Contact from './components/contact.jsx'; // Import the Contact component
import Resume from './components/resume.jsx'; //  Import the Resume component
import './index.css'; // Import the index.css file

const router = createBrowserRouter([ // Define the router variable and set it equal to the createBrowserRouter function
  {
    path: '/', 
    element: <App />, 
    errorElement: <Error />, 
    children: [  
      {
        index: true,
        element: <About />, 
      },
      {
        path: 'portfolio', 
        element: <Portfolio />, 
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render( // Render the following content to the root element
  <RouterProvider router={router} />  // Pass the router variable to the RouterProvider component
);