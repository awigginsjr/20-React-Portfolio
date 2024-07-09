import Header from "./components/Header"; // Import the Header component
import Nav from "./components/Nav"; // Import the Nav component
import Footer from "./components/Footer"; // Import the Footer component
import Page from "./components/Page"; // Import the Page component
import { useLocation } from "react-router-dom"; // Import the useLocation hook from react-router-dom

const App = () => { // Define the App component
  const activePage = useLocation().pathname; // Define the activePage variable and set it equal to the pathname of the current location

  return (
    <div>
      <Header>
        <Nav activePage={activePage} />
      </Header>
      <main>
        <Page activePage={activePage} />
      </main>
      <Footer />
    </div>
  );
};

export default App; // Export the App component
