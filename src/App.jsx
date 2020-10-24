import React, { useEffect } from "react";
import "./App.css";
import Header from "./comps/Header";
import Home from "./comps/Home";
import Checkout from "./comps/Checkout";
import Login from "./comps/Login";
import Payment from "./comps/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebase/Config";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
