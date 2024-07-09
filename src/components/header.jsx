// src/components/header.jsx

const Header = (props) => { // Define the Header component
    return (
        <header className="flex-row space-between px-1">
        <h1>Anthony Wiggins Jr.</h1>
        {props.children}
        </header>
    );
};

export default Header;