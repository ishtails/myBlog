import React from "react";
import { Navbar } from "./components/Navbar";
import { Body } from "./components/Body";
import { BlogDetails } from "./components/BlogDetails";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { NewForm } from "./components/NewForm";
import { NotFound } from "./components/NotFound";


function App() {
  return (
    <div className="font-mono text-gray-500">
      <Router>
        <Navbar />
        <hr className="max-w-5xl m-auto"></hr>
        <Switch>
            <Route exact path = "/">
              <Body />
            </Route>

            <Route exact path = "/create">
              <NewForm />
            </Route>

            <Route exact path = "/blogs/:id">
              <BlogDetails />
            </Route>

            <Route path = "*">
              <NotFound />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;