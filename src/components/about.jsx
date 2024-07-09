// scr/components/about.jsx

import profilePic from '../assets/images/profilepic.png'; // Import the image file

const About = () => { // Define the About component
    return ( // Return the following content
        <section className="my-5">
            <div className="my-2">
                {/* <div className="about-section">  */}
                <h2 className='about'>About Me</h2>
                <div className="photo">
                        <img src={profilePic} alt="Anthony Wiggins Jr."/>
                    <div className="glow-wrap">
                        <i className="glow"></i>
                    </div>
                </div>
                    {/* <h3>About Me</h3>
                    <div className="photo">
                            <img src={profilePic} alt="Anthony Wiggins Jr."/>
                        <div className="glow-wrap">
                            <i className="glow"></i>
                        </div>
                        </div>
                        <div> */}
                    <div className='about-me'>
                        <p>
                            Hello! I&#39;m a junior full-stack developer with a passion for creating dynamic and efficient web applications. With experience in 25+ diverse projects, I have developed a solid foundation in both front-end and back-end technologies. My journey in development has been driven by curiosity and a continuous desire to learn and grow in the field.
                        </p>
                        <ul>
                            <h4>Front-End Development </h4> 
                            Proficient in HTML, CSS, JavaScript, and frameworks such as React. I specialize in creating intuitive and responsive user interfaces that deliver an exceptional user experience.
                        </ul>
                        <ul>
                            <h4>Back-End Development</h4> Proficient in server-side technologies, including Node.js and Express, with extensive experience in designing and implementing robust and scalable APIs. Skilled in working with both SQL and NoSQL databases.
                        </ul>
                        <ul>
                            <h4>Full-Stack Projects</h4> Completed 25+ projects that encompass various aspects of web development, including e-commerce platforms, social media applications, and personal blogs.
                        </ul>
                        <ul>
                            <h4>Collaborations</h4> Experienced in using Git for version control and working in team settings. Familiar with Agile methodologies to ensure efficient and effective project delivery.
                        </ul>
                        <ul>
                            <h4>Continuous Learning</h4> Committed to staying updated on the latest technologies and trends in web development. Currently expanding my knowledge of software development.
                        </ul>  
                    </div>
            </div>
            {/* </div> */}
        </section>
    );
};

export default About; // Export the About component