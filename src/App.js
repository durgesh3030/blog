import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Component/Create/Create";
import About from "./Component/About/About";
import BlogDetail from "./Component/BlogDetail/BlogDetail";

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Create">
              <Create />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetail />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
