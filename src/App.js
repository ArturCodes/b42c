import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from "./Components/Pages/Home/home"
import About from "./Components/Pages/About/about"
import Contact from "./Components/Pages/Contact/contact"
import Footer from "./Components/Footer/footer"

function App() {
  return (
    <Router>

      <div>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route  path="/about">
            <About />
          </Route>

          <Route path="/footer">
            <Footer />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route>
          </Route>

        </Switch>
      </div>

    </Router>
  );
}

export default App;
