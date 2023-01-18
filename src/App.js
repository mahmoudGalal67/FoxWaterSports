import Home from "./pages/Home";
import Gallary from "./pages/gallary";
import About from "./pages/about";
import Contact from "./pages/contact";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Gallary">
            <Gallary />
          </Route>
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
