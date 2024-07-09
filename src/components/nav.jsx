// scr/components/nav.jsx

import { Link } from 'react-router-dom'; // Import the Link component from React Router

function Nav({ activePage }) { // Define the Nav component
  const pages = ['Portfolio', 'Contact', 'Resume'];

  return ( // Return the following content
    <nav>
      <ul>
        <li
          className={`mx-5 ${activePage === '/' && 'isActive'}`}
          key="About"
        >
          <Link to="/">About Me</Link>
        </li>
        {pages.map((Page) => (
          <li
            className={`mx-5 ${activePage === `/${Page}` && 'isActive'}`}
            key={Page}
          >
            <Link to={`/${Page}`}>{(Page)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav; // Export the Nav component
