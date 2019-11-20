import React, {Component} from 'react'; 
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewEmployeeForm from "./components/form"
import {Container} from "reactstrap"
class App extends Component{
  render (){
    return(
      <Router>
        <div>
          <Route exact path ="/" component={NewEmployeeForm} />
        </div>
      </Router>
    )
  }
}
export default App;
