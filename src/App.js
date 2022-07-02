import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { PortfolioPage } from "./pages/Portfolio/Portfolio";
import { Services } from "./pages/Services/Services";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<Homepage />} />
          <Route path="/contact" element={<Homepage />} />
          <Route path="/portfolio/:id" element={<Homepage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
