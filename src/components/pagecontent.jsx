// scr/components/pagecontent.jsx

const PageContent = (props) => { // Define the PageContent component
    return (
        <div>
            {props.children}
        </div>
    );
};

export default PageContent; // Export the PageContent component