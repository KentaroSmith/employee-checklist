import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/home";
import Employee from "./pages/add";
import EmployeeByID from "./pages/employeeID"
import { Navbar, NavItem, NavbarBrand, Nav, NavLink } from "reactstrap"
class App extends Component {
  render() {
    return (
      <div>
{/*I removed the Container element, made everything too claustrophobic*/}
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href="/employee">Add New Employee</NavLink>
            </NavItem>
          </Nav>
        </Navbar>

      <Router>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/employee" component={Employee} />
            <Route exact path="/employeeID/:id" component={EmployeeByID}/>
          </div>
        </Router>
      </div>
    )
  }
}
export default App;
