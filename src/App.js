import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Events from "./pages/Event";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import CompanyProfile from "./components/CompanyProfile";
import AWordFromOurCeo from "./components/AWordFromOurCeo";
import OurTeam from "./components/OurTeam";
import OurMission from "./components/OurMission";
import OurHistory from "./components/OurHistory";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="our-company-profile" element={<CompanyProfile />} />
            <Route path="a-word-from-our-ceo" element={<AWordFromOurCeo />} />
            <Route path="our-team" element={<OurTeam />} />
            <Route path="our-mission" element={<OurMission />} />
            <Route path="our-history" element={<OurHistory />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
