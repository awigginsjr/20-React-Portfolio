// scr/components/resume.jsx

import resume from '../assets/images/AnthonyWiggins_2024_Resume.pdf'; // Import the resume.pdf file

const Resume = () => { // Define the Resume component
    return ( // Return the following content
      <section className="my-5">
        <div className="my-2">
        <p>
        Click to download <a href={resume} download>Resume</a>
          </p>
          <h4>Front-end Skills</h4>
            <ul className="skills">
                <li><i className="fab fa-html5 fa-2x" style={{ color: '#e34c26' }}></i> HTML</li>
                <li><i className="fab fa-css3-alt fa-2x" style={{ color: '#264de4' }}></i> CSS</li>
                <li><i className="fab fa-js fa-2x" style={{ color: '#f0db4f' }}></i> JavaScript</li>
                <li><i className="fas fa-code fa-2x" style={{ color: '#0769ad' }}></i> jQuery</li>
                <li><i className="fas fa-laptop-code fa-2x" style={{ color: '#5a5a5a' }}></i> Responsive Design</li>
                <li><i className="fab fa-react fa-2x" style={{ color: '#61dafb' }}></i> React</li>
                <li><i className="fab fa-bootstrap fa-2x" style={{ color: '#563d7c' }}></i> Bootstrap</li>
            </ul>
          <h4>Back-end Skills</h4>
            <ul className="skills">
                <li><i className="fas fa-server fa-2x" style={{ color: '#f06529' }}></i> APIs</li>
                <li><i className="fab fa-node-js fa-2x" style={{ color: '#68a063' }}></i> Node</li>
                <li><i className="fas fa-server fa-2x" style={{ color: '#000000' }}></i> Express</li>
                <li><i className="fas fa-database fa-2x" style={{ color: '#00758f' }}></i> MySQL, Sequelize</li>
                <li><i className="fas fa-database fa-2x" style={{ color: '#4db33d' }}></i> MongoDB, Mongoose</li>
                <li><i className="fas fa-sync fa-2x" style={{ color: '#00d8ff' }}></i> REST</li>
                <li><i className="fas fa-project-diagram fa-2x" style={{ color: '#e535ab' }}></i> GraphQL</li>
            </ul>
        </div>
      </section>
    );
}
  
export default Resume; // Export the Resume component