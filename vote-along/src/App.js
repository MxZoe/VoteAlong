
import React from 'react';
import './App.css';
import PrivateRoute from "./UI/components/PrivateRoute";
import SignIn from "./UI/Routes/SignIn";
import Vote from "./features/vote/Vote"
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div style = {{
      textAlign: "center"
    }}>
      <h1>VoteAlong.us</h1>
      <Routes>
        <PrivateRoute path = "/vote">
          <Vote />
        </PrivateRoute>
        <Route path = "/">
        <SignIn />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;