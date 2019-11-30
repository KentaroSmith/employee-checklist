import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/home";
import Employee from "./pages/add";
import { Container, Navbar, NavItem, NavbarBrand, Nav, NavLink } from "reactstrap"
class App extends Component {
  render() {
    return (
      <Container>
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
          </div>
        </Router>
      </Container>
    )
  }
}
export default App;