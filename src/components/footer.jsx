// footer component

const Footer = () => { // Define the Footer component
    
    let icons = // Define the icons variable and set it equal to an array of social media icons
    [
        { name: 'fab fa-github icon', link: 'https://github.com/awigginsjr', color: '#333' },
        // { name: 'fab fa-github icon', link: 'https://github.com/awigginsjr'},
        { name: 'fab fa-linkedin-in icon', link: 'https://www.linkedin.com/in/awigginsjr/', color: '#0077b5' },
        // { name: 'fab fa-linkedin-in icon', link: 'https://www.linkedin.com/in/awigginsjr/'},
        { name: 'fab fa-slack icon', link: 'https://slack.com/', color: '#4a154b' },
        // { name: 'fab fa-slack icon', link: 'https://slack.com/'}, https://unccvirtfsfpt-88v5635.slack.com/team/U06F9HD0X8B
        // Add more social media icons here
        //{ name: 'fab fa-instagram', link: 'https://www.instagram.com/accounts/login/?hl=en', color: '#e4405f' },
        //{ name: 'fab fa-twitter', link: 'https://twitter.com/login?lang=en', color: '#1da1f2' }
        // {name: 'fab fa-facebook', link: 'https://www.facebook.com/'}
        // {name: 'fab fa-youtube', link: 'https://www.youtube.com/'}
        // {name: 'fab fa-slack', link: 'https://slack.com/'}
    ];

    return ( // Return the following content to be rendered in the browser window
        <footer className='flex-row'>
            {icons.map(icon => (
                <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer">
                    <i className={`${icon.name} fa-1x`} style={{ color: icon.color }}></i>
                </a>
            ))}
        </footer>
    );
}

export default Footer; // Export the Footer component