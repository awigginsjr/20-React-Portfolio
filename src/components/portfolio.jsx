// src/components/portfolio.jsx

import { useState } from 'react'; // Import the useState hook
import Project from './projects'; // Import the project component

// import * as projects from '../../assets/'; // Import all images from the projects folder
import marvelPic from "../assets/projects/marvelmoviescreen.png"
import weatherPic from "../assets/projects/weatherapp.png"
import noteTakerPic from "../assets/projects/notetakerscreenshot.png"
// import workdayPic from "../assets/projects/workDayscreenShot.png"
import techBlogPic from "../assets/projects/techblogsc.png"
import animeMusicPic from "../assets/projects/README.screenshot.png"
import lateNiteBytesPic from "../assets/projects/lateNiteBytes.png"

const Portfolio = () => { // Define the Portfolio component
    const [projects] = useState([ // Define the projects variable and set it equal to an array of project objects
        {
            title: 'MARVEL: Movie Ratings',
            description: 'Explore Marvel Infinity Saga movies: like, rate, and watch trailers.',
            link: 'https://shanbeezy.github.io/marvel-movie-ratings/',
            repo: marvelPic
        },
        {
            title: 'Weather Dashboard',
            description: '5-day weather app with dynamic HTML and CSS updates.',
            link: 'https://awigginsjr.github.io/06-Weather-Dashboard/',
            repo: weatherPic
        },
        {
            title: 'Note Taker',
            description: 'A note-taking application',
            link: 'https://blooming-brook-84840-7661f930a040.herokuapp.com/',
            repo: noteTakerPic
        },
        {
            title: 'Late Nite Bytes',
            description: 'A MERN Stack Single-Page Application for late-night food options.',
            link: 'https://late-nite-bytes.onrender.com',
            repo: lateNiteBytesPic
        },
        {
            title: 'MVC Tech Blog',
            description: 'Tech Blog to publish articles, share opinions, and comment on posts.',
            link: 'https://arcane-earth-83958-249fb927da46.herokuapp.com/',
            repo: techBlogPic
        },
        {
            title: 'Anime-Music-Quiz',
            description: 'A RESTful API app built with Node, Express, and Handlebars.',
            link: 'https://evening-tor-85224-6a8158656676.herokuapp.com/',
            repo: animeMusicPic
        },
    ]);

    return (
        <div>
          <div className="project-portfolio">
            {projects.map((project, idx) => (
                <div className={project} key={"project" + idx}>
                    <Project
                        project={project}
                        key={"project" + idx}
                    />
                </div>
            ))}
          </div>
        </div>
        
    );
}

export default Portfolio; // Export the Portfolio component