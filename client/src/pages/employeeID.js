import React, { Component } from "react";
import ViewAll from "../components/viewAll";
import api from "../utils/api";
import {
    Jumbotron
} from "reactstrap"

class EmployeeByID extends Component{
constructor(props){
    super(props);
    this.state={
        employee:{}
    }

}
findone = () => {
    let theone = {}
    api.getOneEmployee()
        .then(Response => {
            theone.push(Response.data);
            this.setState({employee:theone[0]})
            console.log(theone[0])
        });
}
render(){
    return(
    <div>
        <Jumbotron>
            {this.findone()}
            Test
        </Jumbotron>
    </div>
    )
}
}
export default EmployeeByID;