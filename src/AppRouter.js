import React from "react";
import App from './App';
import Day1 from './Day1';
import Day2 from './Day2';
import Day3 from './Day3';
import Day4 from './Day4';
import Day5 from './Day5';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function AppRouter() {
  return (
    <Router>
      <div>
        <Link to=""></Link>
        <Route path="" exact component={App} />
        <Route path="/day1" component={Day1} />
        <Route path="/day2" component={Day2} />
        <Route path="/day3" component={Day3} />
        <Route path="/day4" component={Day4} />
        <Route path="/day5" component={Day5} />
      </div>
    </Router>
  );
}

export default AppRouter;