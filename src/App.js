import Home from "./pages/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {lazy,Suspense} from "react"
const About = lazy(()=>import("./pages/about"))
const Gallary = lazy(()=>import("./pages/gallary"))
const Contact = lazy(()=>import("./pages/contact"))

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <Suspense fallback={<h1>Loading ...</h1>}>
              <About />
            </Suspense>
          </Route>
          <Route path="/Contact">
          <Suspense fallback={<h1>Loading ...</h1>}>
              <Contact />
            </Suspense>
          </Route>
          <Route path="/Gallary">
            <Suspense fallback={<h1>Loading ...</h1>}>
              <Gallary />
            </Suspense>
          </Route>
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
