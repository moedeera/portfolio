import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Admin } from "./pages/admin/Admin";
import { Services } from "./pages/Services/Services";
import { Project } from "./pages/Project/Project";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { SiteContextProvider } from "./context/Context";
import ScrollToTop from "./Scroll/Scroll";
import { SingleArticle } from "./pages/Article/SingleArticle";
import { SingleCase } from "./pages/SingleCase/SIngleCase";
import { AboutMe } from "./pages/About/AboutMe";
import { Overview } from "./pages/Overview/Overview";
import { Works } from "./pages/Works/Works";
import { Blogs } from "./pages/Blogs/Blogs";
import { ProtectedRoutes } from "./components/ProtectedRoutes/ProtectedRoutes";
import { Dashboard } from "./pages/admin/dashboard/Dashboard";
import { Login } from "./pages/admin/login/Login";
import { SideMenu } from "./components/SideMenu/SideMenu";
import { Article } from "./pages/Article/Article.js";
import { LinksPage } from "./pages/LinksPage/LinksPage";

function App() {
  return (
    <SiteContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <SideMenu />
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/portfolio" element={<Works />} />
              <Route path="/services" element={<Services />} />
              <Route path="/aboutme" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio/:id" element={<Project />} />
              <Route path="/blog" element={<Blogs />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/blog/:id" element={<Article />} />
              <Route path="/blogs/:id" element={<Article />} />
              <Route path="/case/:id" element={<SingleCase />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/my-work" element={<Works />} />
              <Route path="/blogs" element={<Blogs />} />
              {/* <Route path="/links" element={<LinksPage />} /> */}
              <Route path="/blogs/test/:id" element={<Article />} />

              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<Login />} />

              <Route element={<ProtectedRoutes />}>
                <Route path="/profile" element={<Dashboard />} />
                {/* <Route path="/login" element={<Login />} /> */}
              </Route>
            </Routes>
          </ScrollToTop>
          <Footer />
        </Router>
      </div>
    </SiteContextProvider>
  );
}

export default App;
