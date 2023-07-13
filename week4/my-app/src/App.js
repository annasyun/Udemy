import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "../node_modules/react-router-dom/dist/index";
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import Home from "pages/Home";
import About from "pages/About";
import Profile from "pages/Profile";
import SearchResults from "SearchResults";
import Practice10 from "components/Practice10";
import Movie from "components/Movie";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Practice10 />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
