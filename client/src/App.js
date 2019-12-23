import React, { Component, useState } from 'react';
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
import OneDevice from "./pages/deviceID";
import Software from "./pages/softwareAdd";
import AllSoftware from "./pages/allSoftware";
import OneSoftware from "./pages/softwareID";
import NavigationBar from "./components/navbar";
class App extends Component {
  render() {
    
    return (
      <div id="wrapper">
{/*I removed the Container element, made everything too claustrophobic*/}
<NavigationBar/>
      <Router>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/employee" component={Employee} />
            <Route exact path="/allEmployees" component={AllEmployees}/>
            <Route exact path="/employeeID/:id" component={EmployeeByID}/>
            <Route exact path="/device" component={Device}/>
            <Route exact path="/allDevices" component={AllDevices}/>
            <Route exact path="/deviceID/:id" component={OneDevice}/>
            <Route exact path="/software" component={Software}/>
            <Route exact path="/allSoftware" component={AllSoftware}/>
            <Route exact path="/softwareID/:id" component={OneSoftware}/>
          </div>
        </Router>
      </div>
    )
  }
}
export default App;
