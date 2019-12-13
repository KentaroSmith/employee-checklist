import React, { Component } from "react";
import ViewOne from "../components/viewOne";
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
    let param = window.location.href
    let idNum = param.substr(33)
    let theone={}
    api.getOneEmployee(idNum)
        .then(Response => {
            theone=(Response.data);
            this.setState({employee:theone})
        });
}
render(){
    return(
    <div>
        <Jumbotron>
            {this.findone()}
                    
                    <ViewOne
                    name={this.state.employee.name}
                    position={this.state.employee.position}
                    email={this.state.employee.email}
                    id={this.state.employee.employeeID}
                    workgroup={this.state.employee.workgroup}
                    location={this.state.employee.location}
                    devices={this.state.employee.devices}
                    />

           
        </Jumbotron>
    </div>
    )
}
}
export default EmployeeByID;