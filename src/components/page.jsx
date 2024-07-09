// src/components/page.jsx

import { useEffect } from "react"; // Import the useEffect hook
import PageContent from "./pagecontent.jsx"; // Import the pagecontent component
import { Outlet } from "react-router-dom"; // Import the Outlet component from react-router-dom

const Page = ({ activePage }) => { // Define the Page component
    activePage = activePage.substring(1); // Set the activePage variable equal to the substring of the activePage prop starting at index 1

    useEffect(() => { // Define the useEffect hook
        document.title = activePage.charAt(0).toUpperCase() + activePage.slice(1); // Set the title of the document to the activePage prop with the first letter capitalized
    }, [activePage]); // Set the dependencies of the useEffect hook to the activePage prop

    return ( // Return the following content to be rendered in the browser window 
        <section> 
            <h2>{activePage.charAt(0).toUpperCase() + activePage.slice(1)}</h2>

            <PageContent>
                <Outlet />
            </PageContent>
        </section>
    );
}

export default Page;