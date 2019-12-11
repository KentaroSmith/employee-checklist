import React, { Component } from "react";
import { Button } from "reactstrap";
import NewEmployeeForm from "../components/form"
import api from "../utils/api";
/* import {
    Jumbotron,
    Input,
    Form,
    FormGroup,
    Label,
    Col
} from "reactstrap"; */
class AddEmployee extends Component {
    /* state = {
        name: "Janice Wallace",
        startDate: "12/2/2019",
        supervisorName: "Amber",
        email: "jnelson1@lawrenceks.org",
        employeeID: "223456",
        position: "HR Specialist",
        workgroup: "Internal Services",
        hiringManager: "Amber",
        location: "City Hall",
        positionPosted: "11/18/2019",
        accountLine: "501-7-7100-1021",
        exempt: false,
        supervisorStatus: false,
        visaCard: true,
        cityHallParkingPass: true
    } */
    newEmployee = {
        name: "Lauren Ipsum",
        startDate: "12/2/2019",
        supervisorName: "Amber",
        email: "lipsum@lawrenceks.org",
        employeeID: "323456",
        position: "MSO Operations Technician Generalist",
        workgroup: "Internal Services",
        hiringManager: "Amber",
        location: "WWTP",
        positionPosted: "11/18/2019",
        accountLine: "501-7-7100-1021",
        exempt: false,
        supervisorStatus: false,
        visaCard: true,
        cityHallParkingPass: true
    }
    constructor(props){
        super(props);
        this.state = {
        name: "Janice Wallace",
        startDate: "12/2/2019",
        supervisorName: "Amber",
        email: "jnelson1@lawrenceks.org",
        employeeID: "223456",
        position: "HR Specialist",
        workgroup: "Internal Services",
        hiringManager: "Amber",
        location: "City Hall",
        positionPosted: "11/18/2019",
        accountLine: "501-7-7100-1021",
        exempt: false,
        supervisorStatus: false,
        visaCard: true,
        cityHallParkingPass: true,
        employeeToAdd:{
            name: "Amber Shultz",
            startDate: "12/2/2019",
            supervisorName: "Dave Wagner",
            email: "areynolds@lawrenceks.org",
            employeeID: "423456",
            position: "MI6 Manager",
            workgroup: "Internal Services",
            hiringManager: "Amber",
            location: "City Hall",
            positionPosted: "11/18/2019",
            accountLine: "501-7-7100-1021",
            exempt: false,
            supervisorStatus: false,
            visaCard: true,
            cityHallParkingPass: true,

        }
        }
        
    }
    submitEmployee = event => {
        //Need to find out how information can be save via input forms in react

        api.addEmployee(this.state.employeeToAdd)
            .then(
                console.log("It worked!"),
                console.log(this.state.employeeToAdd)
            )
            .then(
                window.location.href="/"
            )
    }
    render() {
        return (
            <div id="add">
                <NewEmployeeForm/>        
                <Button color="primary" id="submit" onClick={this.submitEmployee} >Submit</Button>
            </div>
        )
    }
}
export default AddEmployee;