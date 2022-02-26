import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Error from "./components/Error";
import ArtPage from "./components/ArtPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Gallery />
        </Route>
        <Route path="/art/:id">
          <ArtPage />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
