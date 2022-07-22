import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./hooks/queryClient";
function App() {
  const getLibrary = (provider) => {
    const library = new Web3(provider);
    return library;
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <LandingPage />
        </Router>
      </QueryClientProvider>
    </Web3ReactProvider>
  );
}

export default App;
