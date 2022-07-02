
import React from 'react';
import './App.css';
import PrivateRoute from "./UI/Components/PrivateRoute";
import Todos from "./UI/Routes/Todos";
import SignIn from "./UI/Routes/SignIn";
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div style = {{
      textAlign: "center"
    }}>
      <h1>VoteAlong.us</h1>
      <Switch>
        <PrivateRoute path = "/vote">
          <Todos />
        </PrivateRoute>
        <Route path = "/">
        <SignIn />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;