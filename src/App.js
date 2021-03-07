import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from "./Components/Pages/Home/home"
import About from "./Components/Pages/About/about"
import Contact from "./Components/Pages/Contact/contact"
import Services from "./Components/Pages/Services/services"

function App() {
  return (
    <Router>

      <div>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

        </Switch>
      </div>

    </Router>
  );
}

export default App;
