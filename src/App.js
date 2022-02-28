import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Error from "./components/Error";
import ArtPage from "./components/ArtPage";
import Slideshow from "./components/Slideshow";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Gallery />} />
        <Route path="/art/:id" element={<ArtPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
