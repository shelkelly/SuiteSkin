import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

import logo from './logo.svg';
import './App.css';
import Enter from "./pages/Enter";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import BandA from "./pages/BandA";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./pageTransitions/slideTransition.scss";

export default class App extends Component {

  render() {

    const timeout = { enter: 800, exit: 400 };

    return (
      <Router>
        <TransitionGroup exact component="div" className="App">
          <CSSTransition 
            timeout={timeout} 
            className="pageSlider" 
            mountOnEnter={false} 
            unmountOnExit={true}
            >
            <div>
            <Switch>
              <Route exact path="/" exact component={Home} />
              <Route exact path="/Home" exact component={Enter} />
              <Route exact path="/Enter" exact component={Enter} />
              <Route exact path="/Services" exact component={Services} />
              <Route exact path="/Contact" exact component={Contact} />
              <Route exact path="/Products" exact component={Products} />
              <Route exact path="/BeforeAndAfter" exact component={BandA} />
              <Route exact component={NoMatch} />
            </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Router >
    );
  }
}
