import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { PortfolioPage } from "./pages/Portfolio/Portfolio";
import { Services } from "./pages/Services/Services";
import { Project } from "./pages/Project/Project";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { SiteContextProvider } from "./context/Context";
import { Blog } from "./pages/Blog/Blog";
import { Article } from "./pages/Article/Article";
import ScrollToTop from "./Scroll/Scroll";
import { SingleArticle } from "./pages/Article/SingleArticle";
import { SingleCase } from "./pages/SingleCase/SIngleCase";
import {AboutMe} from "./pages/About/AboutMe";

function App() {
  return (
    <SiteContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/aboutme" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio/:id" element={<Project />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/admin" element={<Blog />} />
              <Route path="/blog/:post" element={<SingleArticle />} />
              <Route path="/case/:id" element={<SingleCase />} />
              <Route path="/about" element={<AboutMe />} />
            </Routes>
          </ScrollToTop>
        </Router>
        <Footer />
      </div>
    </SiteContextProvider>
  );
}

export default App;
