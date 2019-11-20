import React, {Component} from 'react'; 
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/home"
import {Container} from "reactstrap"
class App extends Component{
  render (){
    return(
      <Router>
        <Container>
        <div>
          <Route exact path ="/" component={Homepage} />
        </div>
        </Container>
      </Router>
    )
  }
}
export default App;
