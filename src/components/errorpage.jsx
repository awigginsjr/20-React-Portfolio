// src/components/errorpage.jsx

import { useRouteError } from "react-router-dom"; // `useRouteError` is a custom hook that returns the error object from the current route

export default function ErrorPage() { // Define the ErrorPage component
  const error = useRouteError(); // Define the error variable and set it equal to the error object from the current route
  console.error(error); // Log the error object to the console

  return ( // Return the following content to be rendered in the browser window
    <div id="error-page">
      <h1>Something went wrong!</h1>
      <p>We are sorry, an unexpected issue has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i> 
      </p>
    </div>
  );
}