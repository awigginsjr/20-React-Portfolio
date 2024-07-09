import Header from "./components/header"; // Import the Header component
import Nav from "./components/nav"; // Import the Nav component
import Footer from "./components/footer"; // Import the Footer component
import Page from "./components/page"; // Import the Page component
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
