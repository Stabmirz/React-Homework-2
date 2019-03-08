import React from "react";
import App from './App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function AppRouter() {
  return (
    <Router>
      <div>
        <Link to=""></Link>
        <Route path="" component={App} />
      </div>
    </Router>
  );
}

export default AppRouter;