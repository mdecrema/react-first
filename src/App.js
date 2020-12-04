import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Technologies from "./components/Technologies";
import Home from "./components/Home";
import Products from "./components/Products";
import News from "./components/News";
import Active from "./components/Active";

function App() {

  return(
      <div className="page-support">
      <Router>
      <Header />
      <Switch>
          <Route className="link" id="linkUno" onclick="linkActive()" exact path="/" component={Home} />
          <Route className="link" path="/technologies" component={Technologies} />
          <Route className="link" path="/products" component={Products} />
          <Route className="link" path="/news" component={News} />
        </Switch>
      </Router>

      <Footer />
      </div>
  );
}


export default App;
