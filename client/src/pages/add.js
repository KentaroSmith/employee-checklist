import React, { Component } from "react";
import { Button } from "reactstrap";
import NewEmployeeForm from "../components/form"
import api from "../utils/api";
import {
    Jumbotron,
    Input,
    Form,
    FormGroup,
    Label,
    Col
} from "reactstrap";
class AddEmployee extends Component {
    state = {
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
    }
    /* constructor(props){
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
        cityHallParkingPass: true
        }
    } */
    submitEmployee = event => {
        //Need to find out how information can be save via input forms in react
        api.addEmployee(this.state)
            .then(
                console.log("It worked!"),
                console.log(this.state)
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