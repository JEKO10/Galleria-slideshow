import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import SingleArt from "./components/SingleArt";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Gallery />
        </Route>
        <Route path="/art/:id">
          <SingleArt />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
