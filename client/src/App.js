import React, {Component} from 'react'; 
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/home"
import {Container,Navbar,NavItem, NavbarBrand} from "reactstrap"
class App extends Component{
  render (){
    return(
      <Container>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
        </Navbar>
        <Router>
          <div>
          <Route exact path ="/" component={Homepage} />
          </div>
        </Router>
      </Container>
    )
  }
}
export default App;
