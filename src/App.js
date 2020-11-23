import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Technologies from "./components/Technologies";
import Home from "./components/Home";
import Products from "./components/Products";


function App() {
  
  return(
      <div className="page-support">
      <Router>
      <Header />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/technologies" component={Technologies} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>

      <Footer />
      </div>
  );
}


export default App;
