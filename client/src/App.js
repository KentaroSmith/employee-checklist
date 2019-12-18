import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/home";
import Employee from "./pages/add";
import AllEmployees from "./pages/allEmployees";
import EmployeeByID from "./pages/employeeID";
import Device from "./pages/deviceAdd";
import AllDevices from "./pages/allDevices";
import OneDevice from "./pages/deviceID"
import { Navbar, NavItem, NavbarBrand, Nav, NavLink } from "reactstrap";
class App extends Component {
  render() {
    return (
      <div id="wrapper">
{/*I removed the Container element, made everything too claustrophobic*/}
        <Navbar /* color="dark" */ dark expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href="/employee">Add New Employee</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/allEmployees">View all Employees</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/device">Add New Device</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/allDevices">View all Devices</NavLink>
            </NavItem>
          </Nav>
        </Navbar>

      <Router>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/employee" component={Employee} />
            <Route exact path="/allEmployees" component={AllEmployees}/>
            <Route exact path="/employeeID/:id" component={EmployeeByID}/>
            <Route exact path="/device" component={Device}/>
            <Route exact path="/allDevices" component={AllDevices}/>
            <Route exact path="/deviceID/:id" component={OneDevice}/>
          </div>
        </Router>
      </div>
    )
  }
}
export default App;
