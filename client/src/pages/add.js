import React, { Component } from "react";
import { Button } from "reactstrap";
import NewEmployeeForm from "../components/form"
import api from "../utils/api";
class AddEmployee extends Component {
    state = {
        name: "",
        startDate: "",
        supervisorName: "",
        email: "",
        employeeID: "",
        position: "",
        workgroup: "",
        hiringManager: "",
        location: "",
        positionPosted: "",
        accountLine: "",
        exempt: false,
        supervisorStatus: false,
        visaCard: false,
        cityHallParkingPass: false
    }
    submitEmployee = event => {
        //Need to find out how information can be save via input forms in react
        let name= this.refs.name
        this.setState({
            name: name

        })
        api.addEmployee(this.state)
            .then(
                console.log("It worked!")
            )
    }
    render() {
        return (
            <div id="add">
                <NewEmployeeForm />
                <Button color="primary" id="submit" onClick={this.submitEmployee} >Submit</Button>
            </div>
        )
    }
}
export default AddEmployee;