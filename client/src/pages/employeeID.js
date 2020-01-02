import React, { Component } from "react";
import ViewOne from "../components/viewOne";
import api from "../utils/api";
import {
    Jumbotron,
    Button
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
    //this worked locally only because localhost:3000 was the url
    //This grabs the last 24 characters in the string and sets it as idNum for getOneEmployee to use as a search parameter
    let idNum = param.substr(param.length-24,param.length)
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
                    startDate={this.state.employee.startDate}
                    positionPosted={this.state.employee.positionPosted}
                    accountLine={this.state.employee.accountLine}
                    supervisorName={this.state.employee.supervisorName}
                    hiringManager={this.state.employee.hiringManager}
                    position={this.state.employee.position}
                    email={this.state.employee.email}
                    id={this.state.employee.employeeID}
                    workgroup={this.state.employee.workgroup}
                    location={this.state.employee.location}
                    devices={this.state.employee.devices}
                    exempt={this.state.employee.exempt}
                    supervisorStatus={this.state.employee.supervisorStatus}
                    visaCard={this.state.employee.visaCard}
                    cityHallParkingPass={this.state.employee.cityHallParkingPass}
                    requestedSoftware={this.state.employee.requestedSoftware}
                    _id={this.state.employee._id}
                    />
           
        </Jumbotron>
    </div>
    )
}
}
export default EmployeeByID;