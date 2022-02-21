import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/services" exact component={Services}/>
                <Route path="/products" exact component={Products}/>
                <Route path="/sign-up" exact component={SignUp}/>
            </Switch>
        </Router>

    </div>
  );
}

export default App;
