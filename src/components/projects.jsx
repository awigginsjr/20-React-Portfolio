// scr/components/projects.jsx

const Project = ({project}) => { // Define the Project component
    const { title, repo, link, description } = project; // Destructure the project object

    return ( // Return the following content
        <div className="project" key={title} style={{ backgroundImage: `url(${repo})` }}>
          {/* <img
            src={repo}
            alt={formatTitle(title)}
            className="project-bg"
          /> */}
          <div className="project-text">
            <h4>
              <a href={link}>{formatTitle(title)}</a>
              &nbsp;
              <a href={repo}>
                {/* <i className="fab fa-github" /> */}
              </a>
            </h4>
            <p>{description}</p>
          </div>
        </div>
    );
}

const formatTitle = (string) => { // Define the formatTitle function
    if (typeof string !== 'string') { // If the string is not a string
      throw new TypeError('Expected a string'); // Throw an error
    }
    return string
      .replace(/-/g, ' ') // Replace all hyphens with spaces
      .replace(/\b\w/g, (match) => match.toUpperCase()); // Capitalize the first letter of each word
};

export default Project; // Export the Projects component
