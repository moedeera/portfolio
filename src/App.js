import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { PortfolioPage } from "./pages/Portfolio/Portfolio";
import { Services } from "./pages/Services/Services";
import { Project } from "./pages/Project/Project";
import { About } from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Homepage />} />
          <Route path="/portfolio/:id" element={<Project />} />
          <Route path="/blog/:id" element={<Project />} />
          <Route path="/blog" element={<Project />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
