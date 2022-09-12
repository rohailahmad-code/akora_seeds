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
import Footer from "./components/Footer";
import Melon from "./collections/Melon";
import Bitter from "./collections/Bitter";
import Cabbage from "./collections/Cabbage";
import Cucumber from "./collections/Cucumber";
import Onion from "./collections/Onion";
import Okra from "./collections/Okra";
import Pepper from "./collections/Pepper";
import Tomato from "./collections/Tomato";
import WaterMelon from "./collections/WaterMelon";
import Squash from "./collections/Squash";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop/>
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
           
          <Route path="products/melon" element={<Melon/>}/>
          <Route path="products/bitter" element={<Bitter/>}/>
          <Route path="products/cabbage" element={<Cabbage/>}/>
          <Route path="products/cucumber" element={<Cucumber/>}/>
          <Route path="products/onion" element={<Onion/>}/>
          <Route path="products/okra" element={<Okra/>}/>
          <Route path="products/pepper" element={<Pepper/>}/>
          <Route path="products/tomato" element={<Tomato/>}/>
          <Route path="products/watermelon" element={<WaterMelon/>}/>
          <Route path="products/squash" element={<Squash/>}/>


          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
