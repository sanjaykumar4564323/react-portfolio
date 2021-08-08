import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Testimonial from "./components/pages/Testimonial";
import Contact from "./components/pages/Contact";
import Search from "./components/pages/Search";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/testimonial" exact component={Testimonial} />
        <Route path="/search" exact component={Search} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
