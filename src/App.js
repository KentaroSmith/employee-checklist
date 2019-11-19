import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewEmployeeForm from "./components/form"
import {Container} from "reactstrap"
function App() {
  return (
    <div className="App">
      <Container>
      <NewEmployeeForm/>
      </Container>
      
    </div>
  );
}

export default App;
