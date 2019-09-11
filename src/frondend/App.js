import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Todoslist from "./component/todos-list.component";
import Edittodos from "./component/edit-todos.component";
import CreateTodos from "./component/create-todos.component";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            MERN-Stack Todo App
          </Link>
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Todos
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Todo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={Todoslist}></Route>
        <Route path="/edit/:id" component={Edittodos}></Route>
        <Route path="/create" component={CreateTodos}></Route>
      </div>
    </Router>
  );
}

export default App;
