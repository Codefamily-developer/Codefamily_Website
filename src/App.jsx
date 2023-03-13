import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";
import React from "react";
import BarLoader from "react-spinners/BarLoader ";
function App() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <BarLoader
            color={"#5C4CE4"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
