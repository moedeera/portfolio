import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/portfolio" element={<Homepage />} />
          <Route path="/services" element={<Homepage />} />
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
