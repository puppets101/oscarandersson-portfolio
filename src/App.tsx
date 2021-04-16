import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        {/* <Route component={Skills} path='/skills' /> */}
        {/* <Route component={About} path='/about' /> */}
        {/* <Route component={Contact} path='/contact' /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
