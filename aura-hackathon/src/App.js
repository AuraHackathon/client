import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";

function App() {
  const getLibrary = (provider) => {
    const library = new Web3(provider);
    return library
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <LandingPage />
      </Router>
    </Web3ReactProvider>
  );
}

export default App;
