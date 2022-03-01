import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Error from "./components/Error";
import ArtPage from "./components/ArtPage";
import { useState } from "react";

function App() {
  const [slideShow, setSlideShow] = useState(false);

  return (
    <Router>
      <Header slideShow={slideShow} setSlideShow={setSlideShow} />
      <Routes>
        <Route exact path="/" element={<Gallery />} />
        <Route
          path="/art/:id"
          element={
            <ArtPage slideShow={slideShow} setSlideShow={setSlideShow} />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
